sentence="this is a wave"

print(len(sentence))
print(sentence[1:])
print(sentence[:2])


word="banana"

count=0
for letter in word:
    print(letter)
    count=count+1
print(count)

# * To get the length of the string
# ! use this code please


def count_length(word):
 count=0
 for letter in word:
  print(letter)
  count=count+1
 print(count)

count_length("tall")