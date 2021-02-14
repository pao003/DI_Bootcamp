LONG_KEY = 26

def getWord():
    while True:
        print("you want to encrypt or decrypt a message")
        word = input()
        if word in 'encrypt e decrypt d'.split():
            return word
        else:
            print('write "encrypt", "e" o "decrypt", "d".')


def getMessage():
    print("write a message:")
    return input()


def getKey():
    # key = 0
    while True:
        print('Enter the key (1-%s)' % (LONG_KEY))
        key = int(input())
        if (key >= 1 and key <= LONG_KEY):
            return key


def getTranslateMessage(word, message, key):
    if word[0] == 'd':
        key = -key
    translate = ''

    for symbol in message:
        if symbol.isalpha(): # returns true if string contains only letters
            num = ord(symbol)
            num += key

            if symbol.isupper(): # checks if the character is a capital letter
                if num > ord('Z'): # If the character > Z subtract 26 from the variable num
                    num -= 26
                elif num < ord('A'):
                    num += 26
            elif symbol.islower(): # If the letter is lowercase
                if num > ord('z'):
                    num -= 26
                elif num < ord('a'):
                    num += 26

            translate += chr(num) # the letter is concatenated to the translate variable
        else:
            translate += symbol
    return translate

word = getWord()
message = getMessage()
key = getKey()

print('The translated text is:')
print(getTranslateMessage(word, message, key)) # these 3 values are passed to the getMessageTranslate()
