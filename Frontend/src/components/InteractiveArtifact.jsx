import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';  // Using react-three-fiber for 3D rendering

const InteractiveArtifact = ({ artifact }) => {
  useEffect(() => {
    // Any logic to load or manipulate the artifact model can go here
  }, [artifact]);

  return (
    <div className="interactive-artifact">
      <Canvas>
        {/* 3D Model or Interactive Element Here */}
      </Canvas>
    </div>
  );
};

export default InteractiveArtifact;
