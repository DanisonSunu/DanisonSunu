````markdown
# 👀 ആരാ അത്? (Araaa Ath?) 🎯

## Basic Details

### Team Members

- Team Lead: Danison Sunu - Jain University, Kochi

### Project Description

**Araaa Ath? is an ESP32-powered human presence detection system with a personality problem.** Using an ultrasonic sensor, it detects how close someone is and reacts with different Malayalam dialogues as they approach. The closer you get, the more aggressively the system judges your existence.

### The Problem (that doesn't exist)

People walk around without receiving enough unnecessary commentary from electronic devices. There was clearly a desperate need for a machine that watches people approach and reacts accordingly.

### The Solution (that nobody asked for)

We connected an HC-SR04 ultrasonic sensor to an ESP32 and made it track people's distance. The distance is sent over Wi-Fi to a Python server and a website that displays a live radar interface and plays increasingly dramatic Malayalam dialogues depending on how close the person gets.

## Technical Details

### Technologies/Components Used

For Software:

- Languages: C++, Python, HTML, CSS, JavaScript
- Framework: Flask
- Libraries: WiFi.h, HTTPClient.h
- Tools: Arduino IDE, Visual Studio Code, GitHub

For Hardware:

- ESP32 Development Board
- HC-SR04 Ultrasonic Distance Sensor
- Jumper Wires
- USB Cable
- Laptop for running the server and web interface

### Implementation

For Software:

# Installation

```bash
git clone https://github.com/DanisonSunu/DanisonSunu.git
cd DanisonSunu
pip install flask
````

# Run

```bash
cd server
python server.py
```

In another terminal:

```bash
cd website
python -m http.server 8000
```

Open the website in your browser:

```text
http://localhost:8000
```

Upload the Arduino code from:

```text
Uselsesproj/Uselsesproj.ino
```

to the ESP32 using the Arduino IDE.

Make sure the ESP32 and laptop are connected to the same Wi-Fi network and that the server IP address in the ESP32 code matches your laptop's local IP address.

### Project Documentation

# Screenshots (Add at least 3)

<!-- Add Screenshot 1 Here -->

![Screenshot 1](ADD_IMAGE_LINK_HERE)

*Add a caption describing Screenshot 1.*

<!-- Add Screenshot 2 Here -->

![Screenshot 2](ADD_IMAGE_LINK_HERE)

*Add a caption describing Screenshot 2.*

<!-- Add Screenshot 3 Here -->

![Screenshot 3](ADD_IMAGE_LINK_HERE)

*Add a caption describing Screenshot 3.*

# Diagrams

<!-- Add your workflow or architecture diagram here -->

![Workflow](ADD_DIAGRAM_IMAGE_LINK_HERE)

*The workflow shows how the HC-SR04 sensor measures distance, the ESP32 sends the data through Wi-Fi to the Python server, and the website updates the radar interface and triggers dialogue reactions.*

For Hardware:

# Schematic & Circuit

<!-- Add your circuit diagram here -->

![Circuit](ADD_CIRCUIT_IMAGE_LINK_HERE)

*The HC-SR04 ultrasonic sensor is connected to the ESP32 to measure the distance of nearby objects.*

| HC-SR04 Pin | ESP32 Pin |
| ----------- | --------- |
| VCC         | 5V        |
| GND         | GND       |
| TRIG        | GPIO 26   |
| ECHO        | GPIO 25   |

# Build Photos

<!-- Add Components Photo Here -->

![Components](ADD_COMPONENTS_IMAGE_LINK_HERE)

*ESP32 development board, HC-SR04 ultrasonic sensor, jumper wires, and USB connection.*

<!-- Add Build Process Photo Here -->

![Build](ADD_BUILD_IMAGE_LINK_HERE)

*The HC-SR04 ultrasonic sensor connected to the ESP32.*

<!-- Add Final Build Photo Here -->

![Final](ADD_FINAL_BUILD_IMAGE_LINK_HERE)

*Final working setup of the Araaa Ath? human presence detection system.*

### Project Demo

# Video

[Add your demo video link here]

*The demo shows a person approaching the sensor while the system detects their distance, updates the live radar interface, and responds with different Malayalam dialogues based on proximity.*

# Additional Demos

* Live Website: [Add GitHub Pages Link Here]
* GitHub Repository: [Add Repository Link Here]

## Team Contributions

* Danison Sunu: ESP32 programming, ultrasonic sensor integration, Python server development, website development, UI design, audio integration, and overall project integration.

---

Made with ❤️ at TinkerHub Useless Projects

```
```
