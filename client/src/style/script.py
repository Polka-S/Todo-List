import os

fonts = []
for filename in os.listdir("src/font/Roboto/"):
    fonts.append(filename.replace(".ttf", ""))

string = '''
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}
'''

with open("src/style/_font.scss", "w") as file:
    for font in fonts:
        file.write(f'''
@font-face {{
  font-family: '{font}';
  src: url('src/fonts/{font}.ttf') format('ttf');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}}
\n\n''')
    
    print(fonts)
