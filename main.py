# ;)
# ! {<J>}
# ! author: Julio C moreira
# ! made between 02/25/22 to 02/25/22

# * LIBS {
from time import sleep
# * }

# * MAIN MENU {
print('\033[36m\ ','\033[1m='*11,'\033[0;36m /')
print(f'\033[34;1m    {"SEQUENCES"}')
print('\033[36m\ ','\033[1m='*11,'\033[0;36m /')
sleep(0.9)
start = int(input('\n\n\033[35menter the start: '))
sleep(0.3)
end = int(input('\n\033[35menter the end: '))
sleep(0.3)
step = int(input('\n\033[35menter the step: '))
sleep(0.3)
pip = {'par': '','impar': '','primo': '2'}
print()
for d in range(start,end+1,step):
    if d % 2 == 0:
        print(f'\033[32;1m{d}\033[m',end='\033[31m -> \033[m')
        pip['par'] += ' ' + str(d)
    else:
        print(f'\033[36m{d}\033[m',end='\033[31m -> \033[m')
        pip['impar'] += ' ' + str(d)
        aleatorio = 1
        divisores = 0
        while aleatorio <= d:
            if d % aleatorio == 0:
                divisores += 1
            aleatorio += 1
        if divisores == 2:
            pip['primo'] += ' ' + str(d)
print('\033[31mEND!')
sleep(0.2)
fil = str(input('\n\nenter the filter (prime/even/odd):')).strip().lower()[0]
if fil == 'p':
    print(f'\033[31;1m\n\n{pip["primo"]}\033[m')
if fil == 'e':
    print(f'\033[31;1m\n\n{pip["par"]}\033[m')
if fil == 'o':
    print(f'\033[31;1m\n\n{pip["impar"]}\033[m')
# * }
