import os
files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
        tmpArray = f.split('.')
        name = tmpArray[0]
        if name[-1] == "s":
            extension = tmpArray[1]
            print(f + " -> " + name[0:-1]+"."+extension)
            os.rename(f, (name[0:-1]+"."+extension))
        else: 
            print(f + ": OK")