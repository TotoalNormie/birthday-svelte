<script type="text/javascript">
    let email = '';
    let password = '';
    const login = (e) => {
		e.preventDefault();
        console.log('works')
		axios
			.post('http://127.0.0.1:8000/api/v1/login', {
				email: email,
				password: password,
			})
			.then((response) => {
				const data = response.data;
				Cookies.set('token', data.token);
				Cookies.set('username', data.user.name);
				Cookies.set('email', data.user.email);
			})
            .catch((error) => {
                console.error(error);
            }
            )
	};
</script>

<form on:submit={login}>
    <input type="text" bind:value={email}>
    <input type="password" bind:value={password}>
    <input type="submit" value='login'> 
</form>