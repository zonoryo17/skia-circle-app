# ローカルでiOSシミュレーターを立ち上げる
.PHONY: start
start:
	bunx expo start --ios --minify --clear

# iOSでStorybookを立ち上げる
.PHONY: start-sb
start-sb:
	bunx expo start --ios --clear

# 初期ビルドを作成する
.PHONY: init
init: build-development-simulator

# シミュレータ用のビルドを作成する
.PHONY: build-development-simulator
build-development-simulator:
	bunx eas build --profile development-simulator --platform ios

# development用のビルドを作成する
.PHONY: build-development
build-development:
	bunx eas build --profile development --platform ios --non-interactive --no-wait

# previewのビルドを作成する
.PHONY: build-preview
build-preview:
	bunx eas build --profile preview --platform ios --non-interactive --no-wait

# storybookのビルドを作成する
.PHONY: build-storybook
build-storybook:
	bunx eas build --profile storybook --platform ios --non-interactive --no-wait

# producionのビルドを作成する
.PHONY: build-production
build-production:
	bunx eas build --profile production --platform ios --non-interactive --no-wait

# producionをサブミットする
.PHONY: submit
submit:
	bunx eas build --profile production --platform ios --non-interactive --no-wait --auto-submit

# Lintチェックをする
.PHONY: lint
lint:
	bunx biome lint ./src

# 型チェックをする
.PHONY: tsc
tsc:
	bunx tsc --noEmit

# テストを実行する
.PHONY: test
test:
	bunx jest

# テストのカバレッジを確認する
.PHONY: test-coverage
test-coverage:
	bunx jest --coverage

# Expo Doctorチェックをする
.PHONY: expo-doctor
expo-doctor:
	bunx expo-doctor

# 共通コンポーネント作成
.PHONY: new-component
new-component:
	bunx hygen component new

# SVGをReactNative形式に作成
.PHONY:
icons:
	bunx svgo --config ./.svg/svgo.config.js ./assets/simple-icons &&\
	bunx svgo --config ./.svg/svgo.config.js ./assets/other-icons &&\
	bunx @svgr/cli --config-file .svg/svgr/gemo.js --no-index ./assets/simple-icons/gemo.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/chevlonLeft.js --no-index ./assets/simple-icons/chevlon-left.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/chevlonRight.js --no-index ./assets/simple-icons/chevlon-right.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/xMark.js --no-index ./assets/simple-icons/x-mark.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/warningTriangle.js --no-index ./assets/simple-icons/warning-triangle.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/informationCircle.js --no-index ./assets/simple-icons/information-circle.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/handShake.js --no-index ./assets/other-icons/hand-shake.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/people.js --no-index ./assets/other-icons/people.svg &&\
	bunx @svgr/cli --config-file .svg/svgr/track.js --no-index ./assets/other-icons/track.svg
