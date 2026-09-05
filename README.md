
# 👀 ആരാ അത്? (Araaa Ath?) 🎯


## Team Members

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

# Project Documentation

# Screenshots 

<!-- Add Screenshot 1 Here -->

![Screenshot 1](https://drive.google.com/file/d/11ES3Sqlp06x-Sh28m-a9gFEKbWaK4Q75/view?usp=drive_link)



<!-- Add Screenshot 2 Here -->

![Screenshot 2](https://drive.google.com/file/d/1mKe8If3-WN6dfTacDSchOwM-LEGixlND/view?usp=drive_link)



<!-- Add Screenshot 3 Here -->

![Screenshot 3](https://drive.google.com/file/d/1Q6rgxyl5lmVw7T_hBntNCyhfO9iAUXHI/view?usp=drive_link)


# Diagrams

<!-- Add your workflow or architecture diagram here -->

*The workflow shows how the HC-SR04 sensor measures distance, the ESP32 sends the data through Wi-Fi to the Python server, and the website updates the radar interface and triggers dialogue reactions.*

For Hardware:

# Schematic & Circuit

<!-- Add your circuit diagram here -->

![Circuit](https://drive.google.com/file/d/1xVSgDwfTxjB_4po9Fe_AeESeJZ0oWFD4/view?usp=drive_link)

*The HC-SR04 ultrasonic sensor is connected to the ESP32 to measure the distance of nearby objects.*

| HC-SR04 Pin | ESP32 Pin |
| ----------- | --------- |
| VCC         | 5V        |
| GND         | GND       |
| TRIG        | GPIO 26   |
| ECHO        | GPIO 25   |

## Build Photos

![Components](https://drive.google.com/file/d/1Z6xIZHjiw2hYKhH3xFBOb3NfGPv6rtEA/view?usp=drive_link)

*ESP32 development board, HC-SR04 ultrasonic sensor, jumper wires, and USB connection.*

*Final working setup of the Araaa Ath? human presence detection system.*

## Project Demo

## Video
[Demo Video](https://drive.google.com/file/d/1ckp7e3_xMpJX41Zr9tkuCIT6XcZrpCNg/view?usp=drivesdk)

*The demo shows a person approaching the sensor while the system detects their distance, updates the live radar interface, and responds with different Malayalam dialogues based on proximity.*

## Additional Demos

* Live Website: [ GitHub Pages Link ](https://danisonsunu.github.io/uselessproject_danison/)
* GitHub Repository: [Repository Link ](https://github.com/DanisonSunu/DanisonSunu)

## Team Contributions

* Danison Sunu: ESP32 programming, ultrasonic sensor integration, Python server development, website development, UI design, audio integration, and overall project integration.

---


```
```
