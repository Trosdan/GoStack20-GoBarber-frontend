import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/Auth';

describe('Auth hook', () => {
  it('should be ale to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@example.com.br',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('johndoe@example.com.br');
  });
});
