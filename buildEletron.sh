ionic cordova build browser --prod
rm -rf www/*
cp -r platforms/browser/www/* www
npm run electron