#!/data/data/com.termux/files/usr/bin/bash

echo "======================================"
echo "       GeoVision Project Test"
echo "======================================"
echo

echo "[1] Checking Project Structure..."

dirs=(
assets
css
data
docs
js
js/core
js/modules
)

for d in "${dirs[@]}"
do
    if [ -d "$d" ]; then
        echo "[PASS] $d"
    else
        echo "[FAIL] $d"
    fi
done

echo
echo "[2] Checking Important Files..."

files=(
index.html
css/style.css
data/cities.js
js/app.js
js/core/config.js
js/core/constants.js
js/core/version.js
js/core/engine.js
js/modules/map/index.js
js/modules/marker/index.js
js/modules/search/index.js
js/modules/location/index.js
)

for f in "${files[@]}"
do
    if [ -f "$f" ]; then
        echo "[PASS] $f"
    else
        echo "[FAIL] $f"
    fi
done

echo
echo "[3] Git Status"

git status --short

echo
echo "[4] Current Branch"

git branch

echo
echo "[5] Last Commit"

git log --oneline -1

echo
echo "======================================"
echo "      TEST FINISHED"
echo "======================================"
