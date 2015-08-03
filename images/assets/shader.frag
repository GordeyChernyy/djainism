precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float time;
uniform float width, height;
uniform float mX, mY;
uniform float _r, _g, _b;
vec4 getWaveColor(in vec2 uv, in vec4 params, in vec3 topColor, in vec3 bottomColor)
{
    vec2 windowSize = vec2(width, height);
    vec2 mouse = vec2(mX, mY);
    vec2 m = mouse/windowSize.xy;
//    float time = m.x * params.y;
    float value = sin(uv.x * params.x ) ;
    value += sin(uv.x * params.x * 2.0 + m.x * 5.0+time) * 0.4;
    value += sin(uv.x * params.x * 4.0 + m.x * 4.0) * 0.2;
    value = cos(value + 1.7) / 3.4;
    
    float height = (uv.y-0.4) * params.z-m.y-0.2;
    float alpha = smoothstep(height, height+params.w, value);
    
    float colorHeight = height * 1.1;
    float colorAlpha = 1.0 - smoothstep(colorHeight, colorHeight + 0.5, value);
    vec3 color = mix(topColor, bottomColor, colorAlpha);
    return vec4(color, alpha);
}

void main( void )
{
    vec2 windowSize = vec2(width, height);
    vec3 c = vec3(_r, _g, _b);
    vec2 uv = gl_FragCoord.xy / windowSize.xy;
    
    vec3 color = mix(vec3(c.y*2.5,c.x*2.5, c.z*1.5), vec3(c.x*0.5,c.y*0.75, c.z*1.15), uv.y);
    vec4 hill;
    
    hill = getWaveColor(uv,
                        vec4(3.0, 1.4, 1.1, 0.8),
                        vec3(c.x*2.5, c.y*2.5, c.z*2.5), vec3(1.0, 1.0, 1.0));
    color = mix(color, hill.rgb, hill.a);
    
    hill = getWaveColor(uv,
                        vec4(4.0, 0.25, 2.0, 0.5),
                        vec3(c.x, c.y, c.z), vec3(1.0, 1.0, 1.0));
    color = mix(color, hill.rgb, hill.a);
    
    hill = getWaveColor(uv, 
                        vec4(5.0, 4.1, 3.7, 0.6 ),
                        vec3(c.x*1.7, c.y*1.7, c.z*1.7), vec3(c.x*1.7, c.y*1.7, c.z*1.7));
    color = mix(color, hill.rgb, hill.a);
    
    gl_FragColor = vec4(color,1.0);
}
