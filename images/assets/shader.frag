precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform float time;
uniform float width, height;

vec3 hsv2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
    return c.z * mix( vec3(1.0), rgb, c.y);
}

void main(void)
{
    vec2 window = vec2(width, height);
    vec2 uv = gl_FragCoord.xy / window.xy;
    uv -= vec2(0.5,0.5);
    uv.y *= 2.5;
    uv += sin(uv.x * 10. * (uv.y * 1.11)  + time) * 0.15;
    float m = clamp((.7 - abs( uv.y )) * 3.,0.,1.);
    vec3 V = hsv2rgb( vec3((uv.x * 0.1) + time * 0.25 ,1.,1.));
    V *=  m;
    V *= 1. - (sin( uv.y * uv.y * 30. ) * .26);
    
    gl_FragColor = vec4(V,1.0);
    
}
