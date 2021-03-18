from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = "localhost"
serverPort = 8080

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"<html><head><title>Your mom gae</title></head>", "utf-8")
        self.wfile.write(bytes(f"<p>Request: {self.path}</p>", 'utf-8'))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(b"<p>This is an example web server.</p>")
        self.wfile.write(b"</body></html>", "utf-8")

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print(f"Server started http://{hostName}:{serverPort}")

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")