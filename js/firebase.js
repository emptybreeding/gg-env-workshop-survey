// Firebase를 필요할 때만 불러옵니다. (불러오기에 실패해도 화면은 먼저 그려집니다.)
const V = '10.12.2';
let cache = null;

export function firebaseReady() {
  const c = window.FIREBASE_CONFIG || {};
  return !!c.apiKey && !String(c.apiKey).startsWith('YOUR_');
}

export async function fb() {
  if (cache) return cache;
  if (!firebaseReady()) throw new Error('Firebase 설정(js/config.js)이 아직 입력되지 않았습니다.');
  const [appMod, fsMod, authMod] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
  ]);
  const app = appMod.initializeApp(window.FIREBASE_CONFIG);
  cache = { db: fsMod.getFirestore(app), auth: authMod.getAuth(app), fs: fsMod, authMod };
  return cache;
}
