mod utils;
use std::{cell::RefCell, rc::Rc, sync::Mutex};

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Copy, Clone, Debug)]
pub enum Status {
    PAUSED,
    PLAYING,
    LOST,
    WON,
}

#[wasm_bindgen]
#[derive(Copy, Clone, Debug)]
pub enum Direction {
    LEFT,
    RIGHT,
    DOWN,
    UP,
}

#[wasm_bindgen]
#[derive(Debug)]
struct Player {
    size: Vec<usize>,
    direction: Direction,
    position: usize,
}

impl Default for Player {
    fn default() -> Self {
        Self {
            size: Vec::new(),
            direction: Direction::RIGHT,
            position: 0,
        }
    }
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Instance {
    width: usize,
    height: usize,
    status: Status,
    player: Player,
}

impl Instance {
    pub fn new(size: usize) -> Self {
        Self {
            width: size,
            height: size,
            status: Status::PAUSED,
            player: Player::new(),
        }
    }

    pub fn change_size(&mut self, size: usize) {
        self.width = size;
        self.height = size;
    }

    pub fn change_status(&mut self, status: Status) {
        self.status = status;
    }

    pub fn execute(&mut self) {
        self.player.walk(self.width);
    }
}

impl Player {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn direction(&mut self, direction: Direction) {
        self.direction = direction;
    }

    pub fn increase(&mut self) {}

    pub fn decrease(&mut self) {}

    pub fn walk(&mut self, size: usize) {
        use Direction::*;

        let world_size = size * size;
        let rows_available = world_size / size;

        let current_column = self.position % size;
        let current_row = ((self.position / size) as f64).floor() as usize % rows_available;

        match self.direction {
            LEFT => todo!(),
            RIGHT => todo!(),
            DOWN => todo!(),
            UP => todo!(),
        }
    }
}
