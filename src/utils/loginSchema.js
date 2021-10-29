import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    username: Yup.string()
                    .min(4, 'Username must be at least 4 characters')
                    .required('Username is required'),
    password: Yup.string()
                .min(6, 'Password must be at least 6 characters.')
                .required('Password is required.')
})

export default loginSchema