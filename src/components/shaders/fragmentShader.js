export default `
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

// 法線ベクトル（球体に見立てたUVから近似）
vec3 getNormal(vec2 uv) {
    vec2 centeredUv = uv * 2.0 - 1.0;
    float z = sqrt(1.0 - clamp(dot(centeredUv, centeredUv), 0.0, 1.0));
    return normalize(vec3(centeredUv, z));
}

void main() {
    // 球体用のUV変換
    float mr = min(uResolution.x, uResolution.y);
    vec2 fragCoord = vUv * uResolution;
    vec2 uv = (fragCoord * 2.0 - uResolution.xy) / mr;

    float d = -uTime * 0.5;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
    }
    d += uTime * 0.5;
    vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
    col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);

    vec3 normal = getNormal(vUv);
    vec3 lightDir = normalize(vec3(0, 0.8, 1.0)); // 光の方向
    float lighting = dot(normal, lightDir);         // 光の当たり具合
    lighting = clamp(lighting, 0.0, 1.0);           // 0〜1に制限

    col *= lighting; // 色に陰影を掛ける
    col = mix(col, vec3(0.7, 0.2, 0.7), 0.2);

    gl_FragColor = vec4(col, 1.0);
}

`;
