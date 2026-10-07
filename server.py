#!/usr/bin/env python3
"""
Servidor para Full Alabanza.
Uso:
    python server.py
"""

import http.server
import socketserver
import os
import re

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        p = str(path)
        if '?' in p:
            p = p.split('?', 1)[0]
        if re.match(r'^/images/music-\d+$', p):
            return 'image/jpeg'
        return super().guess_type(path)

    def end_headers(self):
        if (self.path.startswith('/songs/') or
            self.path.startswith('/images/') or
            self.path.startswith('/videos/')):
            self.send_header('Cache-Control', 'public, max-age=86400')
        super().end_headers()

    def log_message(self, format, *args):
        if ('/images/' in self.path or
            '/songs/' in self.path or
            '/videos/' in self.path):
            return
        super().log_message(format, *args)


def main():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"✅ Servidor corriendo en http://localhost:{PORT}")
        print(f"📁 Sirviendo: {DIRECTORY}")
        print(f"🖼  Imágenes: /images/ y /images/edu/")
        print(f"🎵 Canciones: /songs/")
        print(f"🎬 Videos: /videos/ y /videos/edu/")
        print(f"📱 Generador QR: http://localhost:{PORT}/qr.html")
        print(f"💳 Alias Naranja X: dani0.--")
        print(f"👤 Titular: Braian Daniel Velazquez")
        print(f"⏹  Detén con Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Servidor detenido")


if __name__ == '__main__':
    main()
