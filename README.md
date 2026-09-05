# 👀 ആരാ അത്? | Araaa Ath?

## Human Presence Detection System... With Attitude 💀

A completely unnecessary but highly entertaining **ESP32-based human presence detection system**.

The system detects a person using an **HC-SR04 ultrasonic sensor**, calculates how close they are, and reacts with progressively more aggressive Malayalam dialogues as they approach.

Because apparently, detecting people politely was too boring.

---

## 🎯 Project Idea

The project continuously measures the distance between the sensor and a person.

Depending on how close someone gets, the system:

- Detects their presence
- Tracks their distance
- Updates a live radar interface
- Shows different warning states
- Plays random Malayalam dialogue reactions
- Gets increasingly concerned when someone comes too close 💀

---

## ⚙️ How It Works

```text
Person → HC-SR04 Ultrasonic Sensor → ESP32 → Wi-Fi → Python Server → Live Website
                                                    ↓
                                      Radar + Distance + Malayalam Dialogue
```

---

# 📏 Detection Zones

| Distance | System Reaction | Dialogue Type |
|---|---|---|
| Above 150 cm | No person detected | None |
| 100–150 cm | 👀 Someone is watching from far away | `Araaa Ath` dialogues |
| 70–100 cm | 🤨 Person is getting closer | Curious reactions |
| 40–70 cm | 😐 Getting suspicious | Warning dialogues |
| Below 40 cm | 🚨 TOO CLOSE | Maximum Malayalam aggression 💀 |
| Moving away | 😮 Person leaving | Leaving dialogues |

---

# 🔊 Dialogue System

### 👀 Watching From Far Away
- `Araaa ath.wav`
- `Araaa ath 2.wav`

### 🤨 Getting Closer
- `ivan etha.wav`
- `entha mone.wav`
- `pichakaran.wav`

### 😐 More Closer
- `kaun hai.wav`
- `pichakaran.wav`
- `vazhi mareda.wav`

### 🚨 TOO CLOSE
- `ammayum 1.wav`
- `ammayum 2.wav`
- `ammayum 3.wav`
- `shamless creature.wav`

### 👋 Going Away
- `iyaaal poyoo.wav`
- `oh god u again_.wav`

---

# 🛠️ Technologies Used

### Hardware
- ESP32
- HC-SR04 Ultrasonic Sensor

### Software
- Arduino IDE
- Python
- HTML
- CSS
- JavaScript

### Communication
- Wi-Fi
- HTTP Requests

---

# 📂 Project Structure

```text
useless_project_danison
│
├── server.py
├── esp32_final.ino
│
└── website
    ├── index.html
    ├── style.css
    ├── script.js
    │
    └── audio
        ├── Araaa ath.wav
        ├── Araaa ath 2.wav
        ├── ivan etha.wav
        ├── entha mone.wav
        ├── pichakaran.wav
        ├── kaun hai.wav
        ├── vazhi mareda.wav
        ├── ammayum 1.wav
        ├── ammayum 2.wav
        ├── ammayum 3.wav
        ├── shamless creature.wav
        ├── iyaaal poyoo.wav
        └── oh god u again_.wav
```

---

# 🚀 How to Run

## 1️⃣ Start the Python Server

```bash
python server.py
```

## 2️⃣ Start the Website

Inside the `website` folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 3️⃣ Connect the ESP32

Make sure:

- ESP32 and laptop are connected to the same Wi-Fi network.
- The laptop IP address inside the ESP32 code is correct.

Example:

```cpp
const char* serverBase =
"http://YOUR_LAPTOP_IP:5000/distance";
```

---

# 🔌 Sensor Connections

| HC-SR04 | ESP32 |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | GPIO 26 |
| ECHO | GPIO 25 |

⚠️ **Important:** The HC-SR04 Echo pin may output 5V. Use a voltage divider or level shifter to protect the ESP32 GPIO pin.

---

# 🖥️ Website Features

- 📡 Live radar animation
- 🎯 Moving detection marker
- 📏 Real-time distance display
- 🟡 Far detection state
- 🟠 Closer detection state
- 🔴 Extreme proximity warning
- 🔊 Distance-based Malayalam dialogues
- 📺 Retro monitoring system interface

---

# 🧠 The Logic

```text
AWAY
  ↓
FAR
  ↓
CLOSER
  ↓
NEAR
  ↓
TOO CLOSE 🚨
```

Each time a person enters a new zone:

1. The radar updates.
2. The website status changes.
3. A dialogue is randomly selected.
4. The dialogue plays completely.
5. The next dialogue waits instead of interrupting the current one.

---

# 🤔 Why Does This Exist?

Honestly?

No reason.

We wanted to make something unnecessary.

And somehow ended up building a Wi-Fi-connected human detection system that insults people when they get too close.

So here we are.

---

# ⚠️ Known Limitations

- HC-SR04 readings may fluctuate depending on the environment.
- Laptop IP addresses may change depending on the Wi-Fi network.
- Browser audio requires clicking **START SYSTEM** first.
- The ultrasonic sensor detects objects, not specifically humans.

---

# 🔮 Possible Future Improvements

- Multiple ultrasonic sensors
- Person detection using computer vision
- ESP32-hosted web server
- Mobile notifications
- More Malayalam dialogues
- LED indicators
- Physical enclosure
- An even more aggressive dialogue mode 💀

---

# 👨‍💻 Made By

**Danison**

BTech CSE – Data Science

---

## ⭐ Final Verdict

> A technologically unnecessary solution to a problem that nobody had.

# 👀 ആരാ അത്? 🔴
