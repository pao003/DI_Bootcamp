# 1 exercise
string = input("Please entry a string with 10 characters")
if not 10 <= len(string):
    print("string not long enough")
else:
    print("string too long")

# 2 exercise
first_char = string[0]
print('first character : ', first_char
      )
last_char = string[-1]
print('las character : ', last_char)

# 3 exercise
for i in range(len(string)):
    print(string[:i + 1])

# 4 exercise
import random

l = list(string) # first convert the string in a list of characters
random.shuffle(l) # shuffle it
print(''.join(l)) #join the result

