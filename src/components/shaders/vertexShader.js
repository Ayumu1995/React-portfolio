// vertexShader.js
export default `
precision mediump float;

uniform float uTime;

varying vec2 vUv;

void main() {
  vUv = uv;

  float freq = 4.0;
  float amp = 0.15;
  vec3 displacedPosition = position + normal * sin(uTime + position.y * freq) * amp;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
}
`;
