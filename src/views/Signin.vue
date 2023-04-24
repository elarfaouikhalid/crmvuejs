<template lang="">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet" />
    <!-- <script src="https://cldup.com/S6Ptkwu_qA.js"></script> -->
<body id="particles-js"></body>
<div class="animated bounceInDown">
  <div class="container">
    <div class="toggle-switch">
    </div>
  <div class="adminstarteur" v-if="activeTab === 'admin'">
    <span class="error animated tada" id="msg"></span>
    <form name="form1" class="box" @submit.prevent="submit()">
      <h5>Login</h5>
        <input type="text" v-model="user.email" name="email" id="email" placeholder="Email">
        <i class="typcn typcn-eye" id="eye" @click="toggleShowPassword"></i>
        <input :type="passwordVisible ? 'text' : 'password'" v-model="user.password" id="password" name="password" placeholder="Passsword">
        <div class="container1">
          <div>
            <label class="container1">
              <input type="checkbox">
              <div class="checkmark"></div>
              <small class="rmb">Remember me</small>
            </label>
            <label for="">test</label>
          </div>
        </div>
        <!-- <input type="submit" value="Sign in" > -->
        <!-- <button class="">Sign in</button> -->
        <button class="cssbuttons-io-button btn1"> Get started
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </div>
        </button>
      </form>
      </div> 
      </div> 
</div>

<!-- <Loading v-if="loading" /> -->
<div class="page page-center" :class="{ 'blur_active': blur_active }" v-if="loading">
  <div class="svg-frame">
	<svg style="--i:0;--j:0;">
		<g id="out1">
			<path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
			<path mask="url(#path-1-inside-1_111_3212)" stroke-miterlimit="16" stroke-width="2" stroke="#00FFFF" d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
		</g>
	</svg>

	<svg style="--i:1;--j:1;">
		<g id="out2">
			<mask fill="white" id="path-2-inside-2_111_3212">
				<path d="M102.892 127.966C93.3733 142.905 88.9517 160.527 90.2897 178.19L94.3752 177.88C93.1041 161.1 97.3046 144.36 106.347 130.168L102.892 127.966Z"></path>
				<path d="M93.3401 194.968C98.3049 211.971 108.646 226.908 122.814 237.541L125.273 234.264C111.814 224.163 101.99 209.973 97.2731 193.819L93.3401 194.968Z"></path>
				<path d="M152.707 92.3592C140.33 95.3575 128.822 101.199 119.097 109.421L121.742 112.55C130.981 104.739 141.914 99.1897 153.672 96.3413L152.707 92.3592Z"></path>
				<path d="M253.294 161.699C255.099 175.937 253.132 190.4 247.59 203.639L243.811 202.057C249.075 189.48 250.944 175.74 249.23 162.214L253.294 161.699Z"></path>
				<path d="M172 90.0557C184.677 90.0557 197.18 92.9967 208.528 98.6474C219.875 104.298 229.757 112.505 237.396 122.621L234.126 125.09C226.869 115.479 217.481 107.683 206.701 102.315C195.921 96.9469 184.043 94.1529 172 94.1529V90.0557Z"></path>
				<path d="M244.195 133.235C246.991 138.442 249.216 143.937 250.83 149.623L246.888 150.742C245.355 145.34 243.242 140.12 240.586 135.174L244.195 133.235Z"></path>
				<path d="M234.238 225.304C223.932 237.338 210.358 246.126 195.159 250.604C179.961 255.082 163.79 255.058 148.606 250.534L149.775 246.607C164.201 250.905 179.563 250.928 194.001 246.674C208.44 242.42 221.335 234.071 231.126 222.639L234.238 225.304Z"></path>
			</mask>
			<path mask="url(#path-2-inside-2_111_3212)" fill="#00FFFF" d="M102.892 127.966L105.579 123.75L101.362 121.063L98.6752 125.28L102.892 127.966ZM90.2897 178.19L85.304 178.567L85.6817 183.553L90.6674 183.175L90.2897 178.19ZM94.3752 177.88L94.7529 182.866L99.7386 182.488L99.3609 177.503L94.3752 177.88ZM106.347 130.168L110.564 132.855L113.251 128.638L109.034 125.951L106.347 130.168ZM93.3401 194.968L91.9387 190.168L87.1391 191.569L88.5405 196.369L93.3401 194.968ZM122.814 237.541L119.813 241.54L123.812 244.541L126.813 240.542L122.814 237.541ZM125.273 234.264L129.272 237.265L132.273 233.266L128.274 230.265L125.273 234.264ZM97.2731 193.819L102.073 192.418L100.671 187.618L95.8717 189.02L97.2731 193.819ZM152.707 92.3592L157.567 91.182L156.389 86.3226L151.53 87.4998L152.707 92.3592ZM119.097 109.421L115.869 105.603L112.05 108.831L115.278 112.649L119.097 109.421ZM121.742 112.55L117.924 115.778L121.152 119.596L124.97 116.368L121.742 112.55ZM153.672 96.3413L154.849 101.201L159.708 100.023L158.531 95.1641L153.672 96.3413ZM253.294 161.699L258.255 161.07L257.626 156.11L252.666 156.738L253.294 161.699ZM247.59 203.639L245.66 208.251L250.272 210.182L252.203 205.569L247.59 203.639ZM243.811 202.057L239.198 200.126L237.268 204.739L241.88 206.669L243.811 202.057ZM249.23 162.214L248.601 157.253L243.641 157.882L244.269 162.842L249.23 162.214ZM172 90.0557V85.0557H167V90.0557H172ZM208.528 98.6474L206.299 103.123L206.299 103.123L208.528 98.6474ZM237.396 122.621L240.409 126.611L244.399 123.598L241.386 119.608L237.396 122.621ZM234.126 125.09L230.136 128.103L233.149 132.093L237.139 129.08L234.126 125.09ZM206.701 102.315L204.473 106.791L204.473 106.791L206.701 102.315ZM172 94.1529H167V99.1529H172V94.1529ZM244.195 133.235L248.601 130.87L246.235 126.465L241.83 128.83L244.195 133.235ZM250.83 149.623L252.195 154.433L257.005 153.067L255.64 148.257L250.83 149.623ZM246.888 150.742L242.078 152.107L243.444 156.917L248.254 155.552L246.888 150.742ZM240.586 135.174L238.22 130.768L233.815 133.134L236.181 137.539L240.586 135.174ZM234.238 225.304L238.036 228.556L241.288 224.759L237.491 221.506L234.238 225.304ZM195.159 250.604L196.572 255.4L196.572 255.4L195.159 250.604ZM148.606 250.534L143.814 249.107L142.386 253.899L147.178 255.326L148.606 250.534ZM149.775 246.607L151.203 241.816L146.411 240.388L144.983 245.18L149.775 246.607ZM194.001 246.674L195.415 251.47L195.415 251.47L194.001 246.674ZM231.126 222.639L234.379 218.841L230.581 215.589L227.329 219.386L231.126 222.639ZM98.6752 125.28C88.5757 141.13 83.8844 159.826 85.304 178.567L95.2754 177.812C94.0191 161.227 98.1709 144.681 107.109 130.653L98.6752 125.28ZM90.6674 183.175L94.7529 182.866L93.9976 172.895L89.912 173.204L90.6674 183.175ZM99.3609 177.503C98.1715 161.8 102.102 146.135 110.564 132.855L102.131 127.481C92.5071 142.585 88.0368 160.4 89.3895 178.258L99.3609 177.503ZM109.034 125.951L105.579 123.75L100.205 132.183L103.661 134.385L109.034 125.951ZM88.5405 196.369C93.8083 214.41 104.78 230.259 119.813 241.54L125.815 233.542C112.512 223.558 102.802 209.532 98.1397 193.566L88.5405 196.369ZM126.813 240.542L129.272 237.265L121.274 231.263L118.815 234.54L126.813 240.542ZM128.274 230.265C115.679 220.813 106.486 207.534 102.073 192.418L92.4735 195.221C97.493 212.412 107.948 227.513 122.272 238.263L128.274 230.265ZM95.8717 189.02L91.9387 190.168L94.7415 199.767L98.6745 198.619L95.8717 189.02ZM151.53 87.4998C138.398 90.681 126.188 96.8793 115.869 105.603L122.325 113.239C131.457 105.519 142.262 100.034 153.884 97.2187L151.53 87.4998ZM115.278 112.649L117.924 115.778L125.56 109.322L122.915 106.193L115.278 112.649ZM124.97 116.368C133.616 109.059 143.846 103.866 154.849 101.201L152.495 91.4818C139.981 94.5132 128.347 100.419 118.514 108.732L124.97 116.368ZM158.531 95.1641L157.567 91.182L147.848 93.5364L148.812 97.5185L158.531 95.1641ZM248.334 162.327C250.028 175.697 248.181 189.277 242.978 201.708L252.203 205.569C258.082 191.522 260.169 176.177 258.255 161.07L248.334 162.327ZM249.521 199.027L245.741 197.445L241.88 206.669L245.66 208.251L249.521 199.027ZM248.423 203.987C254.025 190.602 256.014 175.98 254.19 161.585L244.269 162.842C245.873 175.5 244.125 188.357 239.198 200.126L248.423 203.987ZM249.858 167.174L253.923 166.659L252.666 156.738L248.601 157.253L249.858 167.174ZM172 95.0557C183.903 95.0557 195.644 97.8172 206.299 103.123L210.757 94.1717C198.717 88.1761 185.45 85.0557 172 85.0557V95.0557ZM206.299 103.123C216.954 108.429 226.233 116.135 233.406 125.634L241.386 119.608C233.281 108.874 222.796 100.167 210.757 94.1717L206.299 103.123ZM234.383 118.631L231.113 121.1L237.139 129.08L240.409 126.611L234.383 118.631ZM238.116 122.077C230.393 111.849 220.403 103.552 208.93 97.8393L204.473 106.791C214.56 111.814 223.345 119.11 230.136 128.103L238.116 122.077ZM208.93 97.8393C197.458 92.1263 184.816 89.1529 172 89.1529V99.1529C183.269 99.1529 194.385 101.767 204.473 106.791L208.93 97.8393ZM177 94.1529V90.0557H167V94.1529H177ZM239.79 135.601C242.416 140.49 244.504 145.649 246.02 150.988L255.64 148.257C253.927 142.225 251.567 136.395 248.601 130.87L239.79 135.601ZM249.464 144.813L245.523 145.932L248.254 155.552L252.195 154.433L249.464 144.813ZM251.698 149.376C250.067 143.628 247.818 138.073 244.991 132.808L236.181 137.539C238.666 142.168 240.644 147.052 242.078 152.107L251.698 149.376ZM242.951 139.579L246.561 137.64L241.83 128.83L238.22 130.768L242.951 139.579ZM230.441 222.051C220.763 233.351 208.017 241.603 193.746 245.808L196.572 255.4C212.698 250.649 227.101 241.325 238.036 228.556L230.441 222.051ZM193.746 245.808C179.475 250.012 164.291 249.99 150.033 245.742L147.178 255.326C163.289 260.125 180.447 260.151 196.572 255.4L193.746 245.808ZM153.397 251.962L154.567 248.035L144.983 245.18L143.814 249.107L153.397 251.962ZM148.348 251.399C163.7 255.973 180.049 255.997 195.415 251.47L192.588 241.877C179.077 245.858 164.702 245.837 151.203 241.816L148.348 251.399ZM195.415 251.47C210.78 246.942 224.504 238.058 234.924 225.891L227.329 219.386C218.167 230.084 206.099 237.897 192.588 241.877L195.415 251.47ZM227.874 226.436L230.986 229.101L237.491 221.506L234.379 218.841L227.874 226.436Z"></path>
		</g>
	</svg>

	<svg style="--i:0;--j:2;">
		<g id="inner3">
			<path d="M195.136 135.689C188.115 131.215 179.948 128.873 171.624 128.946C163.299 129.019 155.174 131.503 148.232 136.099L148.42 136.382C155.307 131.823 163.368 129.358 171.627 129.286C179.886 129.213 187.988 131.537 194.954 135.975L195.136 135.689Z"></path>
			<path d="M195.136 208.311C188.115 212.784 179.948 215.127 171.624 215.054C163.299 214.981 155.174 212.496 148.232 207.901L148.42 207.618C155.307 212.177 163.368 214.642 171.627 214.714C179.886 214.786 187.988 212.463 194.954 208.025L195.136 208.311Z"></path>
			<path mask="url(#path-5-inside-3_111_3212)" fill="#00FFFF" d="M195.136 135.689L195.474 135.904L195.689 135.566L195.351 135.352L195.136 135.689ZM171.624 128.946L171.627 129.346L171.624 128.946ZM148.232 136.099L148.011 135.765L147.678 135.986L147.899 136.32L148.232 136.099ZM148.42 136.382L148.086 136.603L148.307 136.936L148.641 136.716L148.42 136.382ZM171.627 129.286L171.63 129.686L171.627 129.286ZM194.954 135.975L194.739 136.313L195.076 136.528L195.291 136.19L194.954 135.975ZM195.136 208.311L195.351 208.648L195.689 208.433L195.474 208.096L195.136 208.311ZM171.624 215.054L171.627 214.654L171.624 215.054ZM148.232 207.901L147.899 207.68L147.678 208.014L148.011 208.234L148.232 207.901ZM148.42 207.618L148.641 207.284L148.307 207.063L148.086 207.397L148.42 207.618ZM171.627 214.714L171.63 214.314L171.627 214.714ZM194.954 208.025L195.291 207.81L195.076 207.472L194.739 207.687L194.954 208.025ZM195.351 135.352C188.265 130.836 180.022 128.473 171.62 128.546L171.627 129.346C179.874 129.274 187.966 131.594 194.921 136.026L195.351 135.352ZM171.62 128.546C163.218 128.619 155.018 131.127 148.011 135.765L148.453 136.432C155.33 131.88 163.38 129.418 171.627 129.346L171.62 128.546ZM147.899 136.32L148.086 136.603L148.753 136.161L148.566 135.878L147.899 136.32ZM148.641 136.716C155.463 132.199 163.448 129.757 171.63 129.686L171.623 128.886C163.287 128.958 155.15 131.447 148.199 136.049L148.641 136.716ZM171.63 129.686C179.812 129.614 187.839 131.916 194.739 136.313L195.169 135.638C188.138 131.158 179.959 128.813 171.623 128.886L171.63 129.686ZM195.291 136.19L195.474 135.904L194.799 135.474L194.617 135.76L195.291 136.19ZM194.921 207.974C187.966 212.406 179.874 214.726 171.627 214.654L171.62 215.454C180.022 215.527 188.265 213.163 195.351 208.648L194.921 207.974ZM171.627 214.654C163.38 214.582 155.33 212.12 148.453 207.567L148.011 208.234C155.018 212.873 163.218 215.38 171.62 215.454L171.627 214.654ZM148.566 208.122L148.753 207.838L148.086 207.397L147.899 207.68L148.566 208.122ZM148.199 207.951C155.15 212.553 163.287 215.041 171.623 215.114L171.63 214.314C163.448 214.243 155.463 211.801 148.641 207.284L148.199 207.951ZM171.623 215.114C179.959 215.187 188.138 212.842 195.169 208.362L194.739 207.687C187.839 212.084 179.812 214.386 171.63 214.314L171.623 215.114ZM194.617 208.239L194.799 208.526L195.474 208.096L195.291 207.81L194.617 208.239Z"></path>
		</g>
		<path stroke="#00FFFF" d="M240.944 172C240.944 187.951 235.414 203.408 225.295 215.738C215.176 228.068 201.095 236.508 185.45 239.62C169.806 242.732 153.567 240.323 139.5 232.804C125.433 225.285 114.408 213.12 108.304 198.384C102.2 183.648 101.394 167.25 106.024 151.987C110.654 136.723 120.434 123.537 133.696 114.675C146.959 105.813 162.884 101.824 178.758 103.388C194.632 104.951 209.472 111.97 220.751 123.249" id="out3"></path>
	</svg>

	<svg style="--i:1;--j:3;">
		<g id="inner1">
			<path fill="#00FFFF" d="M145.949 124.51L148.554 129.259C156.575 124.859 165.672 122.804 174.806 123.331C183.94 123.858 192.741 126.944 200.203 132.236C207.665 137.529 213.488 144.815 217.004 153.261C220.521 161.707 221.59 170.972 220.09 179.997L224.108 180.665L224.102 180.699L229.537 181.607C230.521 175.715 230.594 169.708 229.753 163.795L225.628 164.381C224.987 159.867 223.775 155.429 222.005 151.179C218.097 141.795 211.628 133.699 203.337 127.818C195.045 121.937 185.266 118.508 175.118 117.923C165.302 117.357 155.525 119.474 146.83 124.037C146.535 124.192 146.241 124.349 145.949 124.51ZM224.638 164.522C224.009 160.091 222.819 155.735 221.082 151.563C217.246 142.352 210.897 134.406 202.758 128.634C194.62 122.862 185.021 119.496 175.06 118.922C165.432 118.367 155.841 120.441 147.311 124.914L148.954 127.91C156.922 123.745 165.876 121.814 174.864 122.333C184.185 122.87 193.166 126.019 200.782 131.421C208.397 136.822 214.339 144.257 217.928 152.877C221.388 161.188 222.526 170.276 221.23 179.173L224.262 179.677C224.998 174.671 225.35 169.535 224.638 164.522Z" clip-rule="evenodd" fill-rule="evenodd"></path>
			<path fill="#00FFFF" d="M139.91 220.713C134.922 217.428 130.469 213.395 126.705 208.758L130.983 205.286L130.985 205.288L134.148 202.721C141.342 211.584 151.417 217.642 162.619 219.839C173.821 222.036 185.438 220.232 195.446 214.742L198.051 219.491C197.759 219.651 197.465 219.809 197.17 219.963C186.252 225.693 173.696 227.531 161.577 225.154C154.613 223.789 148.041 221.08 142.202 217.234L139.91 220.713ZM142.752 216.399C148.483 220.174 154.934 222.833 161.769 224.173C173.658 226.504 185.977 224.704 196.689 219.087L195.046 216.09C185.035 221.323 173.531 222.998 162.427 220.82C151.323 218.643 141.303 212.747 134.01 204.122L131.182 206.5C134.451 210.376 138.515 213.607 142.752 216.399Z" clip-rule="evenodd" fill-rule="evenodd"></path>
		</g>
	</svg>

	<svg style="--i:2;--j:4;">
		<path fill="#00FFFF" d="M180.956 186.056C183.849 184.212 186.103 181.521 187.41 178.349C188.717 175.177 189.013 171.679 188.258 168.332C187.503 164.986 185.734 161.954 183.192 159.65C180.649 157.346 177.458 155.883 174.054 155.46C170.649 155.038 167.197 155.676 164.169 157.288C161.14 158.9 158.683 161.407 157.133 164.468C155.582 167.528 155.014 170.992 155.505 174.388C155.997 177.783 157.524 180.944 159.879 183.439L161.129 182.259C159.018 180.021 157.648 177.186 157.207 174.141C156.766 171.096 157.276 167.989 158.667 165.245C160.057 162.5 162.261 160.252 164.977 158.806C167.693 157.36 170.788 156.788 173.842 157.167C176.895 157.546 179.757 158.858 182.037 160.924C184.317 162.99 185.904 165.709 186.581 168.711C187.258 171.712 186.992 174.849 185.82 177.694C184.648 180.539 182.627 182.952 180.032 184.606L180.956 186.056Z" id="center1"></path>
		<path fill="#00FFFF" d="M172 166.445C175.068 166.445 177.556 168.932 177.556 172C177.556 175.068 175.068 177.556 172 177.556C168.932 177.556 166.444 175.068 166.444 172C166.444 168.932 168.932 166.445 172 166.445ZM172 177.021C174.773 177.021 177.021 174.773 177.021 172C177.021 169.227 174.773 166.979 172 166.979C169.227 166.979 166.979 169.227 166.979 172C166.979 174.773 169.227 177.021 172 177.021Z" id="center"></path>
	</svg>

</div>
</div>

</template>
<script>
import { mapActions } from 'vuex';
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      passwordVisible: false,
      blur_active: false,
      activeTab: 'admin'
    }
  },
  components: {Loading},
  methods: {
    ...mapActions({
      'signIn': 'auth/signin'
    }),
    submit() {
      this.blur_active = true;
      this.loading = true;
      const redirectPath = this.$route.query.redirect;
      const pathName = redirectPath ? redirectPath : 'Dashboard';
      console.log(redirectPath);
      this.signIn(this.user).then(() => {
          this.$router.replace({path: pathName}) 
      })
      .finally(() => {
        this.loading = false; // set loading state to false when login process is completed
      });
    },
    toggleShowPassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
}

</script>
<style scoped>
    /* CSS Libraries Used 

*Animate.css by Daniel Eden.
*FontAwesome 4.7.0
*Typicons

*/
.toggle-switch{
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
}
.toggle-switch .active{
    background: #000;
    border-radius: 12px;
}
.toggle-switch div{
    padding: 0.5rem;
}
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');

body, html {
  font-family: 'stockmanagmentFont', sans-serif !important;
  background-color: #000000;
  padding: 0;
  margin: 0;
}
* {
  font-family: 'stockmanagmentFont', sans-serif !important;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container{
  margin: 0;
    top: 50px;
    left: 50%;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    background-color: rgb( 33, 41, 66 );
    border-radius: 9px;
    /* border-top: 10px solid #ffffff; */
    /* border-right: 10px solid #ffffff; */
    width: 400px;
    height: 500px;
    /* box-shadow: 1px 1px 108.8px 19.2px rgb(25 31 53); */
    /* border-left: 10px solid #ffffff; */
    /* box-shadow: 1px 1px 108.8px 19.2px rgb(25 31 53); */
    /* box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px; */
    box-shadow: rgb(0 0 255 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
}

.box h4 {
  font-family: 'stockmanagmentFont', sans-serif;
  color: #5c6bc0; 
  font-size: 18px;
  margin-top:72px;
}

.box h4 span {
  color: #dfdeee;
  font-weight: lighter;
}

.box h5 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  color: #a1a4ad;
  letter-spacing: 1.5px;
  /* margin-top: -15px; */
  margin-bottom: 70px;
}

.box input[type = "text"],.box #password {
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 100%;
  outline: none;
  color: #d6d6d6;
      -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
  
}
::-webkit-input-placeholder {
  color: #565f79;
}

.box input[type = "text"]:focus,.box input[type = "password"]:focus {
  border: 1px solid #79A6FE;
  
}

a{
  color: #5c7fda;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

 label input[type = "checkbox"] {
  display: none; /* hide the default checkbox */
}

/* style the artificial checkbox */
label span {
  height: 17px;
    width: 15px;
    border: 2px solid #464d64;
    border-radius: 2px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    float: left;
    left: 170%;
}

.btn1 {
    width: 100%;
    height: 49px;
    font-size: 16px;
    position: relative;
    /* top: 104%; */
    /* left: 8%; */
    transition: 0.3s;
    cursor: pointer;
    margin-top: 2rem;
}

.btn1:hover {
  background: #5d33e6;
}

.rmb {
  /* position: absolute; */
  margin-left: 4px;
  margin-top: 0px;
  color: #dfdeee;
  font-size: 13px;
}

.forgetpass {
  position: relative;
  float: right;
  right: 28px;
}

.dnthave{
    position: absolute;
    top: 92%;
    left: 24%;
}

/* Hide the default checkbox */
.container1 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container1 {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  justify-content: space-between;
  align-items: center;
}
.container1 div {
  display: flex;
  align-items: center;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.5em;
  width: 1.5em;
  background-color: #ccc;
  border-radius: 50%;
  transition: .4s;
}

.checkmark:hover {
  box-shadow: inset 17px 17px 16px #b3b3b3,
            inset -17px -17px 16px #ffffff;
}

/* When the checkbox is checked, add a blue background */
.container1 input:checked ~ .checkmark {
  box-shadow: none;
  background-color: limegreen;
  transform: rotateX(360deg);
}

.container1 input:checked ~ .checkmark:hover {
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container1 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container1 .checkmark:after {
  left: 0.6em;
  top: 0.5em;
  width: 0.25em;
  height: 0.5em;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
  transform: rotate(45deg);
}

.typcn {
  position: absolute;
  left: 355px;
  top: 229px;
  color: #d5d5d5;
  font-size: 22px;
  cursor: pointer;
}      

.typcn.active {
  color: #7f60eb;
}

.error {
  background: #ff3333;
  text-align: center;
  width: 337px;
  height: 20px;
  padding: 2px;
  border: 0;
  border-radius: 5px;
  margin: 10px auto 10px;
  position: absolute;
  top: 31%;
  left: 7.2%;
  color: white;
  display: none;
}

.footer {
    position: relative;
    left: 0;
    bottom: 0;
    top: 605px;
    width: 100%;
    color: #78797d;
    font-size: 14px;
    text-align: center;
}

.footer .fa {
  color: #7f5feb;;
}
.page-center {
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
}
.container-slim{
  background-color: #1d243d;
}

.svg-frame {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-frame svg {
  position: absolute;
  transition: .5s;
  z-index: calc(1 - (0.2 * var(--j)));
  transform-origin: center;
  width: 344px;
  height: 344px;
  fill: none;
}


.svg-frame svg #center {
  transition: .5s;
  transform-origin: center;
}

.svg-frame:hover svg #center {
  transform: rotate(-30deg) translateX(45px) translateY(-3px);
}

#out2 {
  animation: rotate16 7s ease-in-out infinite alternate;
  transform-origin: center;
}

#out3 {
  animation: rotate16 3s ease-in-out infinite alternate;
  transform-origin: center;
  stroke: #ff0;
}

#inner3,
#inner1 {
  animation: rotate16 4s ease-in-out infinite alternate;
  transform-origin: center;
}

#center1 {
  fill: #ff0;
  animation: rotate16 2s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes rotate16 {
  to {
    transform: rotate(360deg);
  }
}
.blur_active {
  backdrop-filter: blur(10px);
}

.cssbuttons-io-button {
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: white;
  background: #ad5389;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

</style>