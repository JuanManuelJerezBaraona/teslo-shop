'use server';

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        // await sleep(2);
        await signIn('credentials', formData);
    } catch (error) {
        return 'CredentialsSignin';
    }
}