{
  "targets": [
  {
    "target_name": "btle",
      "sources": [
        "src/btio.c",
        "src/gatt.cc",
        "src/btleException.cc",
        "src/btleConnection.cc",
        "src/connection.cc",
        "src/util.cc"
      ],
      "link_settings": {
        "libraries": [
          "-lbluetooth"
          ]
      }

  }
  ]
}
