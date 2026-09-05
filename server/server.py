from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import json


# =====================================
# LATEST SENSOR DISTANCE
# =====================================

latest_distance = -1


# =====================================
# SERVER HANDLER
# =====================================

class Handler(SimpleHTTPRequestHandler):

    def do_GET(self):

        global latest_distance

        parsed_url = urlparse(self.path)


        # =================================
        # ESP32 SENDS DISTANCE
        # =================================

        if parsed_url.path == "/distance":

            query = parse_qs(parsed_url.query)


            try:

                if "value" in query:

                    latest_distance = float(
                        query["value"][0]
                    )

                    print(
                        f"Distance received: "
                        f"{latest_distance:.1f} cm"
                    )

            except ValueError:

                print(
                    "Invalid distance received"
                )


            self.send_response(200)

            self.send_header(
                "Content-type",
                "text/plain"
            )

            self.send_header(
                "Access-Control-Allow-Origin",
                "*"
            )

            self.end_headers()

            self.wfile.write(
                b"OK"
            )


        # =================================
        # WEBSITE GETS DISTANCE
        # =================================

        elif parsed_url.path == "/status":

            self.send_response(200)

            self.send_header(
                "Content-type",
                "application/json"
            )

            self.send_header(
                "Access-Control-Allow-Origin",
                "*"
            )

            self.end_headers()


            response = json.dumps({

                "distance":
                    latest_distance

            })


            self.wfile.write(

                response.encode()

            )


        # =================================
        # EVERYTHING ELSE
        # =================================

        else:

            self.send_response(404)

            self.end_headers()


# =====================================
# START SERVER
# =====================================

server = HTTPServer(

    ("0.0.0.0", 5000),

    Handler

)


print(
    "================================="
)

print(
    "SERVER RUNNING ON PORT 5000"
)

print(
    "ESP32 -> /distance"
)

print(
    "Website -> /status"
)

print(
    "================================="
)


server.serve_forever()