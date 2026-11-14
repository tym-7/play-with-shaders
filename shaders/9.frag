vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
    vec4 pixel = def_frag();
    return vec4(0.0, 0.0, 0.0, pixel.a);
}
