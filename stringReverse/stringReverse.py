def reverse_string(str):
    str1=''
    for i in str:
        str1=i+str1
    return str1
    
    
    
print(reverse_string('hello'))


# method2

def reverse_str(str):
    str1=str[::-1]
    return str1

print(reverse_str('world'))