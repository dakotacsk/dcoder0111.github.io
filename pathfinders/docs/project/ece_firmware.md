ECE SPECIFIC PAGE:

# ECE & Firmware Design

### Electrical Design

Our electrical system has three main components: the monitor, Raspberry Pi, and the breadboard/buttons/circuits.

The monitor and Raspberry Pi are both powered separately. The Raspberry Pi is powered via the USB C port on the RasPi and is connected to one of the USB A ports on our laptops. The monitor is plugged directly into a wall outlet.

The breadboard is powered via the 5V pin of the Rasberry Pi, and is also connected to the ground of the Pi. The breadboard consists of multiple buttons with pulldown resistors. When the buttons are pressed, current and voltage passes through the lower powered resistors attached to the button, and that current is read by a GPIO pin on the Raspberry Pi.

The Raspberry Pi is connected to the monitor via its micro HDMI port, connecting to one of the two HDMI ports on the monitor.

### Firmware Design

For each button, a GPIO pin on the Raspberry Pi reads high if it is pressed, and low if it is not pressed. We have a file in our code with a ButtonSensing class, with two key functions. checkButtonPress(pin), can take inputs 0-6, corresponding to the 7 buttons in the assembly. This function returns True if the button was previously not pressed down but is now currently being pressed. The checkButtonHold(pin) function returns true if the button corresponding to _pin_ is actively being held down.

**Example Snippet**:

```cpp
import RPi.GPIO as GPIO
import time


# Set up the GPIO mode to BCM (Broadcom pin numbering)
GPIO.setmode(GPIO.BCM)


# List of GPIO pins to which the buttons are connected
button_pins = [17, 27, 22, 5, 6, 13, 23]


# Set up each GPIO pin as an input with pull-up resistor enabled
for pin in button_pins:
   GPIO.setup(pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)


try:
   while True:
       for pin in button_pins:
           button_state = GPIO.input(pin)
           if button_state == GPIO.HIGH:
               print(f"Button on GPIO {pin} is pressed!")
           else:
               print(f"Button on GPIO {pin} is not pressed.")

       time.sleep(0.5)  # Check every 0.5 seconds


except KeyboardInterrupt:
   print("Program terminated")


finally:
   GPIO.cleanup()  # Clean up the GPIO settings when the program exits





```

**Link to Source Code**:  
[Firmware Repo Link](https://github.com/dakotacsk/PIE_ShortestPathFindingVisualization)

---

## Process

### Design Decisions

We began the electrical design with 6 buttons and an arduino, which we eventually shifted to 7 buttons and a Raspberry Pi. This was because the Raspberry Pi was stronger and able to store and run our game code. The additional button was simply added for game/mechanical integration.

### Challenges

One challenge we faced was keeping the Raspberry Pi at a level temperature and to not overheat it. To work with this, we decreased the load on the Raspberry Pi by running fewer applications at the same time as well as by adding a temperature check that we monitored.

Another challenge we faced was with the resistors we were using. The Raspberry Pi has a maximum current draw of 300 mA, meaning that our pulldown resistors needed to be at least 15 ohms. This ended up being less of a challenge, and more of a thing we didn’t think to consider until after working on this project.

### Progress Timeline

For the first sprint, the first steps were in creating a controller. Using the buttons we had purchased, a breadboard, and an arduino. Starting with only 6 buttons we soldered each, connecting them all to the bread board and attached the arduino. We were able to recognize button presses from the arduino after this sprint.
By the second sprint we had switched the arduino for a Raspberry Pi. This step was followed by the addition of a seventh button. The Raspberry Pi was then able to connect to the monitor through an HDMI cable and run/display the pre downloaded code.

By the third sprint, we were able to make the game playable entirely by the buttons, in previous sprints we had to use a keyboard and mouse to play the game. We also optimized the screen size so that the game fills our monitor screen entirely, making the game feel immersive.
