<div align="center">

  <h1><code>snk</code></h1>

  <strong>A React Native app with <a href="#">Expo</a>.</strong> <br/>
  <sub>Built with a mix of techs and languages...</sub>
</div>

<br/>

## About

[**📚 How to run? 📚**][usage]

A simple React Native project mixed with Golang for the API and Rust for the WASM implementation. 

The main goal here was to challenge myself with a couple simple concepts that I have the knowledge, such as Auth, API integration, WebAssembly embedding. It's simples, but it's a learning project.

## 🚴 Usage

Install the root packages.

```
[package-manager] install
```

Compile the WASM with Rust

```
cd wasm && wasm-pack build --target web && cd ..
```

Spin up the docker

```
cd backend && cp .env.example .env && docker compose up -d && cd ..
```

Run the project

```
[package-manager] run dev
```

## License

Licensed under either of

* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)
