use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_registers(left: u16, right: u16) -> u16 {
    left.wrapping_add(right)
}
