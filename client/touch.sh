dir="$1"
name="$2"

path="$dir/$name"

mkdir "$path"
touch "$path/$name.jsx"
touch "$path/_$name.module.scss"