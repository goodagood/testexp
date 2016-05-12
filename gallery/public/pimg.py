
import glob
import subprocess32 as sp
import os
import random

pngs = glob.glob('vid2/*png')
#print pngs

p30s = glob.glob('vid2/*30.png')

#print p30s

orig = [i for i in pngs if i not in p30s]
#print orig

orig.sort()
p30s.sort()

op = zip(orig, p30s)
#print op

tpl = """
  <a href="{src}" title="{name}">
    <img src="{thumb}" alt="{name}">
  </a>
"""

t2 = """

    <div class="poster">

        <div class="thumb-wrapper">
          <img src="{src}" height="160" alt="{name}">
          <span class="play-btn"></span>
        </div>

        <p>
            <span class="value">{value}</span>
            <i class="fa fa-tint"></i>
            <span class="name">{name}</span>
        </p>
    </div>
"""

root = '/'

def one():
    html = ""

    for i in pngs:
        #print i
        src = i
        shref = os.path.join(root, src)
        name  = os.path.basename(src)

        one = tpl.format(src=shref, name=name)
        html += one
        pass

    print html
    with open('/tmp/ihtml', 'w') as f:
        f.write(html)

def two():
    html = ""

    for i in op:
        #print i
        src = i[0]
        t30 = i[1]
        shref = os.path.join(root, src)
        thref = os.path.join(root, t30)
        name  = os.path.basename(src)

        value = int(random.random() * 100)

        one = t2.format(src=shref, thumb=thref, name=name, height="160",
                value=value)
        html += one
        pass

    print html
    with open('/tmp/html2', 'w') as f:
        f.write(html)


if __name__ == "__main__":
    two()
