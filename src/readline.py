# python3 readline.txt
str = ""
for line in open("readline.txt"):
  # str += "'" + line.strip("\n") + "', "
  str += "'" +  line.strip("\n") + "', \n"
print(str)
