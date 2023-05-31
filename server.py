from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

class MyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == "__main__":
    PORT = 8000
    handler = MyHandler
    httpd = TCPServer(("", PORT), handler)
    print("Server running at port", PORT)
    httpd.serve_forever()
