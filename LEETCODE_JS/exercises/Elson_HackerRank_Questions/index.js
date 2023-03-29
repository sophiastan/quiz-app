vowels = ['a','e','i','o', 'u']
minChanges = [1,   1,   2,   1,   1,   1,   2,   1,   1,   1,   2,   3,   2, 1,   1,   1,   2,   3,   2,   1,   1,   1,   2,   3,   4,   5]
vow = []
con = []
for i in range(0, len(password)):
    if password[i] in vowels:  
        vcount = vcount + 1;  
        vow.append(minChanges[password[i]-'A'])
    elif (password[i] >= 'a' and password[i] <= 'z'):  
        ccount = ccount + 1;  
        con.append(minChanges[password[i]-'A'])

vow.sort()
con.sort()