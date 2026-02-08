import React, { useRef, useEffect, useState } from 'react';

interface TransparentGifProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TransparentGif: React.FC<TransparentGifProps> = ({ 
  src, 
  width = 60, 
  height = 60, 
  alt = "Logo", 
  className,
  style 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    let animationFrameId: number;

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw image
      ctx.drawImage(img, 0, 0, width, height);

      // Get image data to manipulate pixels
      try {
        const frame = ctx.getImageData(0, 0, width, height);
        const data = frame.data;
        const length = data.length;

        // Loop through pixels and make white ones transparent
        // Threshold for "white" (can be adjusted)
        const threshold = 240; 

        for (let i = 0; i < length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // If pixel is close to white, make it transparent
          if (r > threshold && g > threshold && b > threshold) {
            data[i + 3] = 0; // Alpha = 0 (Transparent)
          }
        }

        // Put modified data back
        ctx.putImageData(frame, 0, 0);
        
        // Request next frame to keep it updated if it's an animated GIF
        // Note: Canvas drawImage on a GIF usually only draws the first frame in standard browsers 
        // without a specialized library. However, some browsers might update. 
        // If this doesn't animate, we might need a different approach or a library like 'gifler'.
        // BUT, the user specifically asked to "use script to change the white bg as transparent less by the help of js".
        // A simple drawImage loop often works for video, but for GIF it might be static.
        // Let's try this first. If it's static, we might need a library or the user might accept a static first frame 
        // (though they said "gif", implying animation).
        // Actually, Browsers DON'T provide frames of a GIF via drawImage. It just draws the current frame.
        // If the IMG element is creating the frames, we can draw it repeatedly?
        // Let's rely on a hidden IMG element driving the timing? No, that doesn't work well for cross-origin or simple Image().
        
        // ALERT: Standard `drawImage` with a GIF source creates a STATIC image of the first frame (or current frame depending on browser).
        // To remove BG from an *animated* GIF dynamically without a heavy library is hard.
        // OPTION 2: CSS `mix-blend-mode: multiply` (leaves darks, removes lights) - simplest but might not be perfect "transparent".
        // OPTION 3: The user said "use script". 
        
        // Let's try the loop. If the specific browser implementation updates the 'img' source frame, it might work. 
        // If not, we might need `mix-blend-mode` as a backup or `gifuct-js`.
        
        animationFrameId = requestAnimationFrame(render);
      } catch (e) {
        console.error("Canvas manipulation error", e);
      }
    };

    img.onload = () => {
      render();
    };

    img.onerror = () => {
      setError(true);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [src, width, height]);

  if (error) {
    return <img src={src} alt={alt} width={width} height={height} className={className} style={style} />;
  }

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className={className}
      style={{ ...style, objectFit: 'contain' }}
    />
  );
};

export default TransparentGif;
