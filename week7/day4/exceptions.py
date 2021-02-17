def divide():
    x = 5 / 0


try:
    divide()
except ZeroDivisionError:
    print("Can not to divide a number by 0")
