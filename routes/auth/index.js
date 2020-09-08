import express from 'express';

import kakaoRouter from './kakao';

const router = express

router.request('/kakao', kakaoRouter);

export default router;