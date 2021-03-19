import secrets
import string

password = ''.join((secrets.choice(string.ascii_letters + string.digits + string.punctuation) for i in range(128)))
print(password)