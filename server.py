#!/usr/bin/env python3
"""
Servidor para Full Alabanza.

Sirve las imágenes (con o sin extensión) con el MIME correcto
para que el navegador las muestre.

Uso:
    python server.py
Luego abre: http://localhost:8000
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
        # Imagen sin extensión /images/music-N → forzar image/jpeg
        if re.match(r'^/images/music-\d+$', p):
            return 'image/jpeg'
        return super().guess_type(path)

    def end_headers(self):
        if self.path.startswith('/songs/') or self.path.startswith('/images/'):
            self.send_header('Cache-Control', 'public, max-age=86400')
        super().end_headers()

    def log_message(self, format, *args):
        if '/images/' in self.path or '/songs/' in self.path:
            return
        super().log_message(format, *args)


def main():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"✅ Servidor corriendo en http://localhost:{PORT}")
        print(f"📁 Sirviendo: {DIRECTORY}")
        print(f"🖼  Imágenes en /images/music-N → image/jpeg")
        print(f"⏹  Detén con Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Servidor detenido")


if __name__ == '__main__':
    main()