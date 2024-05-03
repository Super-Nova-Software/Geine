'use client';

import { SocialButton } from '@/components/common';
import { continueWithGoogle, continueWithFacebook } from '@/utils';
import { Facebook,Chrome  } from 'lucide-react';

export default function SocialButtons() {
	return (
		<div className='flex justify-between items-center gap-2 mt-5'>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<Chrome  className='mr-3' /> Google Signin
			</SocialButton>
			<SocialButton provider='facebook' onClick={continueWithFacebook}>
				<Facebook className='mr-3' /> Facebook Signin
			</SocialButton>
		</div>
	);
}
