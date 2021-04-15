var documenterSearchIndex = {"docs":
[{"location":"man/salt_pepper/#Salt-and-Pepper","page":"Salt and Pepper","title":"Salt and Pepper","text":"","category":"section"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"Salt and Pepper noise in general is a noise which modifies a pixel with two different values of noise. Usually it sets randomly black and white spots on the image.","category":"page"},{"location":"man/salt_pepper/#Usage","page":"Salt and Pepper","title":"Usage","text":"","category":"section"},{"location":"man/salt_pepper/#Arrays,-Grayscale-Images-and-RGB-Images","page":"Salt and Pepper","title":"Arrays, Grayscale Images and RGB Images","text":"","category":"section"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"For arrays, grayscale images (Array{<:Gray}) and RGB images (Array{<:RGB}) we provide the following method:","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"salt_pepper(X; salt_prob=0.5, salt=1.0, pepper=0.0[, prob])","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"This methods sets the salt or pepper noise to each pixel and channel individually. In the case of RGB images, this means that every colorchannel of a pixel receives its own salt or pepper. The array X must be provided. prob is a optional argument following X. This value is the probability that a individual pixel is affected by noise. In the case a pixel receives a noise, we either choose salt or pepper. salt_prob is a keyword argument describes  the probability that a choosen pixel will be affected by salt. 1-salt_prob describes therefore the probabilty for pepper. Additionally we can also choose the numerical value for salt and pepper using the keyword argument salt and pepper respectively.  For RGB images the effect is more a color effect since we affect each channel individually and not only the pixel.","category":"page"},{"location":"man/salt_pepper/#RGB-images-each-Channel-the-same","page":"Salt and Pepper","title":"RGB images each Channel the same","text":"","category":"section"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"For RGB images (Array{<:RGB}) we also provide the following:","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"salt_pepper_chn(X; salt_prob=0.5, salt=1.0, pepper=0.0[, prob])","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"This method, in contradiction to the previous one, doesn't add the noise to each colorchannel of a element independently but rather  sets the noise value for each channel of a pixel.  For RGB this introduces real black and white spots. ","category":"page"},{"location":"man/salt_pepper/#Examples","page":"Salt and Pepper","title":"Examples","text":"","category":"section"},{"location":"man/salt_pepper/#Images","page":"Salt and Pepper","title":"Images","text":"","category":"section"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"Some examples with images.","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"using Noise, TestImages, Images\nimg_gray = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\n\nimg_gray_noise = salt_pepper(img_gray)\nimg_color_noise = salt_pepper(img_color)\nimg_color_channel_noise = salt_pepper_chn(img_color)\n\n# 30% of pixels are black or white\nimg_gray_noise_heavy = salt_pepper(img_gray, 0.3)\n# 10% of pixels are white\nimg_gray_noise_white = salt_pepper(img_gray, 0.1, salt_prob=1)\n# 10% of pixels are gray\nimg_gray_noise_gray  = salt_pepper(img_gray, 0.1, salt_prob=0, pepper=0.7)\n\n\n\nsave(\"../images/sp_img_gray_noise.png\", img_gray_noise) # hide\nsave(\"../images/sp_img_color_noise.png\", img_color_noise) # hide\nsave(\"../images/sp_img_color_channel_noise.png\", img_color_channel_noise) # hide\nsave(\"../images/sp_img_gray_noise_heavy.png\", img_gray_noise_heavy) # hide\nsave(\"../images/sp_img_gray_noise_white.png\", img_gray_noise_white) #hide\nsave(\"../images/sp_gray_noise_gray.png\", img_gray_noise_gray) #hide\nnothing # hide","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"The images are in the same order as the commands are. The middle image has applied noise to each color channel individually, in the right the same noise is added to all channels of a pixel. Therefore the midle image has a color noise, the noise in the image in the right corresponds to some intensity noise. 10% noise means that only 10% of all pixels are noisy, by default this means roughly  5% white pixels and 5% black pixels.","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"Gray image with 10% noise RGB image with channelwise noise RGB image with pixelwise noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"Gray image with 30% salt or pepper Gray image with 10% salt Gray image with 10% gray\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/salt_pepper/#D-Arrays","page":"Salt and Pepper","title":"1D Arrays","text":"","category":"section"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"Some examples with 1D arrays. ","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"using Noise, Plots\n\nx = LinRange(0.0, 10.0, 300)\ny = sin.(x)\ny_noise = salt_pepper(y, 0.05, pepper=-1.0)\ny_noise_2 = salt_pepper(y, 0.2, pepper=-0.5, salt=0.5)\n\nplot(x,y);\nplot!(x, y_noise);\nplot!(x, y_noise_2);\nsavefig(\"../images/sp_series.png\") # hide\nnothing # hide","category":"page"},{"location":"man/salt_pepper/","page":"Salt and Pepper","title":"Salt and Pepper","text":"As you can see we are able to introduce salt and pepper noise the same way to 1D arrays. (Image: )","category":"page"},{"location":"man/additive_white_gaussian/#Additive-White-Gaussian","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"","category":"section"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"Additive white Gaussian noise is one of the most common types of noise. We simply add a random number to each pixel.  The random number has a mean mu of zero and a certain standard deviation sigma.","category":"page"},{"location":"man/additive_white_gaussian/#Usage","page":"Additive White Gaussian","title":"Usage","text":"","category":"section"},{"location":"man/additive_white_gaussian/#Arrays,-Grayscale-Images-and-RGB-Images","page":"Additive White Gaussian","title":"Arrays, Grayscale Images and RGB Images","text":"","category":"section"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"For arrays, grayscale images (Array{<:Gray}) and RGB images (Array{<:RGB}) we provide the following method:","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"add_gauss(X; clip=false[, σ=0.1, μ=0.0])","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"This methods adds a random Gaussian value to each individual element of the array.  In the case of RGB images, this means that every colorchannel of one pixel receives a different amount of noise. The array X must be provided, clip is a keyword argument. If clip=true  the values will be clipped to the interval [0,1]. sigma and mu represent the standard deviation  and the mean of the gaussian noise respectively. If mu is unequal to 0, we increase the overall intensity of an image. sigma represents how strong the noise is, alreay a value of sigma=05 introduces a lot of noise. If the stored numbers of the array are somehow a subtype of Normed we automatically clip them. This is quite common if you use the Images library which uses by default a type Array{Gray{Normed{UInt8, 8}}}. For Float arrays we don't clip any values, this should be preferably used for any use case outside of images. ","category":"page"},{"location":"man/additive_white_gaussian/#RGB-images-each-Channel-the-same","page":"Additive White Gaussian","title":"RGB images each Channel the same","text":"","category":"section"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"For RGB images (Array{<:RGB}) we also provide the following:","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"add_gauss_chn(X; clip=false[, σ=0.1, μ=0.0])","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"This method, in contradiction to the previous one, adds the same noise value to all color channels of one pixel. ","category":"page"},{"location":"man/additive_white_gaussian/#Examples","page":"Additive White Gaussian","title":"Examples","text":"","category":"section"},{"location":"man/additive_white_gaussian/#Images","page":"Additive White Gaussian","title":"Images","text":"","category":"section"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"Here some examples with images.","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"using Noise, TestImages, Images\nimg_gray = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\nimg_float = convert(Array{Gray{Float64}}, img_gray) \n\nimg_gray_noise = add_gauss(img_gray)\n# the following call sets the standard deviation and the mean manually\nimg_color_noise = add_gauss(img_color, 0.1, 0.0)\n# since mean is by default 0.0 we can leave it out\nimg_color_channel_noise = add_gauss_chn(img_color, 0.1)\n\nimg_gray_noise_heavy = add_gauss(img_gray, 0.5)\nimg_gray_noise_intensity = add_gauss(img_gray, 0.1, 0.3)\n\n# without clip the intensity can be above 1.0 as well\n# however, we can only save (see below) a image with intensities [0, 1]\nimg_float_noise  = add_gauss(img_float, 0.3, -0.6, clip=true)\n\n\nsave(\"../images/awg_img_gray_noise.png\", img_gray_noise) # hide\nsave(\"../images/awg_img_color_noise.png\", img_color_noise) # hide\nsave(\"../images/awg_img_color_channel_noise.png\", img_color_channel_noise) # hide\nsave(\"../images/awg_img_gray_noise_heavy.png\", img_gray_noise_heavy) # hide\nsave(\"../images/awg_img_gray_noise_intensity.png\", img_gray_noise_intensity) #hide\nsave(\"../images/awg_float_noise.png\", img_float_noise) #hide\nnothing # hide","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"The images are in the same order as the commands are. The middle image has applied noise to each color channel individually, in the right the same noise is added to all channels of a pixel. Therefore the midle image has a color noise, the noise in the image in the right corresponds to some intensity noise.","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"Grayscale image noise All channels of a pixel have different noise All channels of a pixel have the same noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"Gray image with heavy noise Gray image intensity gain noise Float Image with intensity reducing noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/additive_white_gaussian/#D-Arrays","page":"Additive White Gaussian","title":"1D Arrays","text":"","category":"section"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"Some examples with 1D arrays. ","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"using Noise, Plots\n\nx = LinRange(0.0, 10.0, 300)\ny = sin.(x)\n# small noise\ny_noise = add_gauss(y, 0.05)\n# heavy noise and mean shift\ny_noise_2 = add_gauss(y, 0.2, -0.4)\n\nplot(x,y);\nplot!(x, y_noise);\nplot!(x, y_noise_2);\nsavefig(\"../images/awg_series.png\") # hide\nnothing # hide","category":"page"},{"location":"man/additive_white_gaussian/","page":"Additive White Gaussian","title":"Additive White Gaussian","text":"As you can see we are able to introduce white gaussian noise the same way to 1D arrays. The green curved is shifted downwards because of the negative mu. (Image: )","category":"page"},{"location":"man/mult_gauss/#Multiplicative-White-Gaussian","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"","category":"section"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"Multiplicative white Gaussian noise is common for image sensor where the pixels have different gain.  We simply multiply a random number with a Gaussian distribution.  The random number has usually a mean mu of 1 and a certain standard deviation sigma.","category":"page"},{"location":"man/mult_gauss/#Usage","page":"Multiplicative White Gaussian","title":"Usage","text":"","category":"section"},{"location":"man/mult_gauss/#Arrays,-Grayscale-Images-and-RGB-Images","page":"Multiplicative White Gaussian","title":"Arrays, Grayscale Images and RGB Images","text":"","category":"section"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"For arrays, grayscale images (Array{<:Gray}) and RGB images (Array{<:RGB}) we provide the following method:","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"mult_gauss(X; clip=false[, σ=0.1, μ=1])","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"This methods multiplieds a random Gaussian value with each individual element of the array.  In the case of RGB images, this means that every colorchannel of one pixel receives a different amount of noise. The array X must be provided, clip is a keyword argument. If clip=true  the values will be clipped to the interval [0,1]. sigma and mu represent the standard deviation  and the mean of the gaussian noise respectively. If mu is unequal to 1, we change the overall intensity of an image. sigma represents how strong the noise is, alreay a value of sigma=05 introduces a lot of noise. If the stored numbers of the array are somehow a subtype of Normed we automatically clip them. This is quite common if you use the Images library which uses by default a type Array{Gray{Normed{UInt8, 8}}}. For Float arrays we don't clip any values, this should be preferably used for any use case outside of images. ","category":"page"},{"location":"man/mult_gauss/#RGB-images-each-Channel-the-same","page":"Multiplicative White Gaussian","title":"RGB images each Channel the same","text":"","category":"section"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"For RGB images (Array{<:RGB}) we also provide the following:","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"mult_gauss_chn(X; clip=false[, σ=0.1, μ=1])","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"This method, in contradiction to the previous one, multiplies the same noise value to all color channels of one pixel. ","category":"page"},{"location":"man/mult_gauss/#Examples","page":"Multiplicative White Gaussian","title":"Examples","text":"","category":"section"},{"location":"man/mult_gauss/#Images","page":"Multiplicative White Gaussian","title":"Images","text":"","category":"section"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"Here some examples with images.","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"using Noise, TestImages, Images\nimg_gray = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\nimg_float = convert(Array{Gray{Float64}}, img_gray) \n\nimg_gray_noise = mult_gauss(img_gray)\n# the following call sets the standard deviation and the mean manually\nimg_color_noise = mult_gauss(img_color, 0.1, 1.0)\n# since mean is by default 0.0 we can leave it out\nimg_color_channel_noise = mult_gauss_chn(img_color, 0.1)\n\nimg_gray_noise_heavy = mult_gauss(img_gray, 0.5)\nimg_gray_noise_intensity = mult_gauss(img_gray, 0.1, 1.2)\n\n# without clip the intensity can be above 1.0 as well\n# however, we can only save (see below) a image with intensities [0, 1]\nimg_float_noise  = mult_gauss(img_float, 0.3, 0.5, clip=true)\n\n\nsave(\"../images/mg_img_gray_noise.png\", img_gray_noise) # hide\nsave(\"../images/mg_img_color_noise.png\", img_color_noise) # hide\nsave(\"../images/mg_img_color_channel_noise.png\", img_color_channel_noise) # hide\nsave(\"../images/mg_img_gray_noise_heavy.png\", img_gray_noise_heavy) # hide\nsave(\"../images/mg_img_gray_noise_intensity.png\", img_gray_noise_intensity) #hide\nsave(\"../images/mg_float_noise.png\", img_float_noise) #hide\nnothing # hide","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"The images are in the same order as the commands are. The middle image has applied noise to each color channel individually, in the right the same noise is added to all channels of a pixel. Therefore the midle image has a color noise, the noise in the image in the right corresponds to some intensity noise.","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"Grayscale image noise All channels of a pixel have different noise All channels of a pixel have the same noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"Gray image with heavy noise Gray image intensity gain noise Float Image with intensity reducing noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/mult_gauss/#D-Arrays","page":"Multiplicative White Gaussian","title":"1D Arrays","text":"","category":"section"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"Some examples with 1D arrays. ","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"using Noise, Plots\n\nx = LinRange(0.0, 10.0, 300)\ny = sin.(x)\n# small noise\ny_noise = mult_gauss(y, 0.05)\n# heavy noise and mean shift\ny_noise_2 = mult_gauss(y, 0.2, 0.4)\n\nplot(x,y);\nplot!(x, y_noise);\nplot!(x, y_noise_2);\nsavefig(\"../images/mg_series.png\") # hide\nnothing # hide","category":"page"},{"location":"man/mult_gauss/","page":"Multiplicative White Gaussian","title":"Multiplicative White Gaussian","text":"The amplitude of the green curve is roughly halved because mu=04. Furthermore we can see that the noise amplitude is higher for higher values. This is reasonable since we multiplied it with the value. (Image: )","category":"page"},{"location":"man/function_references/#Function-References","page":"Function References","title":"Function References","text":"","category":"section"},{"location":"man/function_references/#Additive-White","page":"Function References","title":"Additive White","text":"","category":"section"},{"location":"man/function_references/","page":"Function References","title":"Function References","text":"add_gauss\nadd_gauss_chn","category":"page"},{"location":"man/function_references/#Noise.add_gauss","page":"Function References","title":"Noise.add_gauss","text":"add_gauss(X; clip=false[, σ=0.1, μ=0.0])\n\nReturns the array X with gauss noise (standard deviation σ and mean μ)  added.  σ and μ are optional arguments representing standard deviation and mean of gauss. If keyword argument clip is provided the values are clipped to be in [0, 1]. If X is a RGB{Normed} or Gray{Normed} image, then the values will be automatically clipped and the keyword  clip is meaningless.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Noise.add_gauss_chn","page":"Function References","title":"Noise.add_gauss_chn","text":"add_gauss_chn(X; clip=false[, σ=0.1, μ=0.0])\n\nReturns the RGB image X with gauss noise (standard deviation σ and mean μ)  added pixelwise. However, every channel of one pixel receives the same amount of noise. The noise therefore acts roughly as intensity - but not color - changing noise. If keyword argument clip is provided the values are clipped to be in [0, 1]. σ and μ are optional arguments representing standard deviation and mean of gauss.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Salt-and-Pepper","page":"Function References","title":"Salt and Pepper","text":"","category":"section"},{"location":"man/function_references/","page":"Function References","title":"Function References","text":"salt_pepper\nsalt_pepper_chn","category":"page"},{"location":"man/function_references/#Noise.salt_pepper","page":"Function References","title":"Noise.salt_pepper","text":"salt_pepper(X; salt_prob=0.5, salt=1.0, pepper=0.0[, prob=0.1])\n\nReturns array X affected by salt and pepper noise. X can be an array or an RGB or Gray image prob is a optional argument for the probability that a pixel will be affected by the noise. salt_prob is a keyword argument representing the probability for salt noise.  The probability for pepper noise is therefore 1-salt_prob. salt is a keyword argument for specifying the value of salt noise. pepper is a keyword argument for specifying the value of pepper noise.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Noise.salt_pepper_chn","page":"Function References","title":"Noise.salt_pepper_chn","text":"salt_pepper_chn(X; salt_prob=0.5, salt=1.0, pepper=0.0[, prob=0.1])\n\nReturns a RGB Image X affected by salt and pepper noise. When a salt or pepper occurs, it is applied to all channels of the RGB making a real salt and pepper on the whole image. prob is a optional argument for the probability that a pixel will be affected by the noise. salt_prob is a keyword argument representing the probability for salt noise.  The probability for pepper noise is therefore 1-salt_prob. salt is a keyword argument for specifying the value of salt noise. pepper is a keyword argument for specifying the value of pepper noise.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Poisson","page":"Function References","title":"Poisson","text":"","category":"section"},{"location":"man/function_references/","page":"Function References","title":"Function References","text":"poisson","category":"page"},{"location":"man/function_references/#Noise.poisson","page":"Function References","title":"Noise.poisson","text":"poisson(X; scaling=nothing, clip=false)\n\nReturns the array X affected by Poisson noise.  At every position the Poisson noise affects the intensity individually  and the values at the positions represent the expected value of the Poisson Distribution.  Since Poisson Noise due to discrete events you should provide the optional argument scaling. This scaling connects the highest value of the array with the discrete number of events. The highest value will be then scaled and the poisson noise is applied Afterwards we scale the whole array back so that the initial intensity is preserved but with applied Poisson noise. clip is a keyword argument. If given, it clips the values to [0, 1]\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Quantization","page":"Function References","title":"Quantization","text":"","category":"section"},{"location":"man/function_references/","page":"Function References","title":"Function References","text":"quantization","category":"page"},{"location":"man/function_references/#Noise.quantization","page":"Function References","title":"Noise.quantization","text":"quantization(X, levels; minv=0, maxv=1)\n\nReturns array X discretized to levels different values. Therefore the array is discretized. levels describes how many different value steps the resulting image has. minv=0 and maxv indicate the minimum and maximum possible values of the images. In RGB and Gray images this is usually 0 and 1. There is also quantization! available.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Multiplicative-Gaussian-Noise","page":"Function References","title":"Multiplicative Gaussian Noise","text":"","category":"section"},{"location":"man/function_references/","page":"Function References","title":"Function References","text":"mult_gauss\nmult_gauss_chn","category":"page"},{"location":"man/function_references/#Noise.mult_gauss","page":"Function References","title":"Noise.mult_gauss","text":"mult_gauss(X; clip=false[, σ=0.1, μ=1])\n\nReturns the array X with the array value multiplied with a gauss distribution (standard deviation σ and mean μ) .  σ and μ are optional arguments representing standard deviation and mean of gauss. If keyword argument clip is provided the values are clipped to be in [0, 1]. If X is a RGB{Normed} or Gray{Normed} image, then the values will be automatically clipped and the keyword  clip is meaningless.\n\n\n\n\n\n","category":"function"},{"location":"man/function_references/#Noise.mult_gauss_chn","page":"Function References","title":"Noise.mult_gauss_chn","text":"mult_gauss_chn(X; clip=false[, σ=0.1, μ=0.0])\n\nReturns the RGB image X with the values of the pixel multiplied with a gauss distribution (standard deviation σ and mean μ) pixelwise.  However, every channel of one pixel receives the same amount of noise. The noise therefore acts roughly as intensity - but not color - changing noise. If keyword argument clip is provided the values are clipped to be in [0, 1]. σ and μ are optional arguments representing standard deviation and mean of gauss.\n\n\n\n\n\n","category":"function"},{"location":"man/poisson/#Poisson","page":"Poisson","title":"Poisson","text":"","category":"section"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"Poisson noise originates from the discrete nature of events. For example the dataset could be a microscopy image with very limited intensity (like a flourescent specimen).  In this case the probability that one measures a specific number of photons is:","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"P(k) = fraclambda^k exp(-lambda)k","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"where lambda being the expected value and k the measured one. Our Poisson noise randomly picks values out of this distribution.","category":"page"},{"location":"man/poisson/#Usage","page":"Poisson","title":"Usage","text":"","category":"section"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"We provide the following method for arrays, Gray images and RGB images.","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"poisson(X; scaling=1, clip=false)","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"X is the array. ","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"Poisson noise is applied to each array element individually where lambda is determined by the value itself.  However, for example sensors do not measure the number of photons directly but instead some intensity.  scaling is a optional argument to connect the intensity to a number of discrete events. For example, usually one can estimate that the highest pixel in the measured data corresponds to 100 photons, in that case you provide scaling=100 to the method. Usually one wants to provide this parameter. If you provide an array which already contains integer numbers which corresponds to the measured discrete events,  you can ommit scaling.","category":"page"},{"location":"man/poisson/#Examples","page":"Poisson","title":"Examples","text":"","category":"section"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"Here some examples with images.","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"using Noise, TestImages, Images\nimg_gray = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\n\n# the highest intensity corresponds to 10 photons\nimg_gray_noise = poisson(img_gray, 10.0)\n# the highest intensity corresponds to 1000 photons\nimg_gray_noise_heavy = poisson(img_gray, 1000.0)\nimg_color_noise = poisson(img_color, 100.0)\n\n\nsave(\"../images/pois_img_gray_noise.png\", img_gray_noise) # hide\nsave(\"../images/pois_img_gray_noise_heavy.png\", img_gray_noise_heavy) # hide\nsave(\"../images/pois_img_color_noise.png\", img_color_noise) # hide\nnothing # hide","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"As it can be seen clearly, the image with more measured photons, is less affected by noise.","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"Grayscale with 10 photons at the brightest value Grayscale image 1000 photons at the brightest value RGB image with 100 photons at the brightest value\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/poisson/#D-Arrays","page":"Poisson","title":"1D Arrays","text":"","category":"section"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"Poisson noise cannot handle negative occurences by design, therefore the 1D array is a y-shifted sinus curve.","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"using Noise, Plots\n\nx = LinRange(0.0, 10.0, 1000)\ny = 1 .* sin.(x) .+ 1\n# small noise\ny_noise = poisson(y, 100)\n# heavy noise and mean shift\n\nplot(x,y);\nplot!(x, y_noise);\nsavefig(\"../images/pois_series.png\") # hide\nnothing # hide","category":"page"},{"location":"man/poisson/","page":"Poisson","title":"Poisson","text":"We notice that amount of noise is, in contradiction to additive noise, higher for higher intensity values. However, the signal-to-noise ratio is better for higher intensity values. This was visible in the fabio image. (Image: )","category":"page"},{"location":"#Noise.jl","page":"Noise.jl","title":"Noise.jl","text":"","category":"section"},{"location":"#Introduction","page":"Noise.jl","title":"Introduction","text":"","category":"section"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"The purpose of this package is to provide several methods to add different kinds of noise to images or arrays.","category":"page"},{"location":"#Installation","page":"Noise.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"Noise.jl is available for all version equal or above Julia 1.0. It is mainly tested under Linux but should also work on Windows. It and can be installed with the following command","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"julia> Pkt.update()\njulia> Pkg.add(\"Noise\")","category":"page"},{"location":"#Usage","page":"Noise.jl","title":"Usage","text":"","category":"section"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"Currently, all methods are not working in place and return always a new array. In general, if images like Array{RGB{<:Normed} Array{Gray{<:Normed}} are given to a method, a new image with same type will be returned. The methods also work for normal Arrays like Array{<:Number}. At the moment three different types of noise are possible: Additive white Gaussian, Salt and Pepper and Poisson noise.","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"using Noise, TestImages, Images, Plots\nimg = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\n\nimg_gray_gauss = add_gauss(img, 0.1)\nimg_color_gauss = add_gauss(img_color, 0.1)\nimg_gray_sp = salt_pepper(img, 0.1)\n\n# 1D array\nx = LinRange(0.0, 10.0, 300)\ny = sin.(x)\n# small noise\ny_noise = add_gauss(y, 0.1)\n\n\nplot(x,y); # hide\nplot!(x, y_noise); # hide\nsavefig(\"images/series_index.png\") # hide\n\nsave(\"images/img_gray_gauss_index.png\", img_gray_gauss) # hide\nsave(\"images/img_color_gauss_index.png\", img_color_gauss) # hide\nsave(\"images/img_gray_sp_index.png\", img_gray_sp) # hide\nnothing # hide","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"The left gray image is affected by Gaussian noise with a standard deviation of sigma = 01.  In the image in the middle, we added Gaussian noise with the same standard deviation but to each individual color pixel giving the fluctuating color look. The image on the right is affected by salt and pepper noise by a probability of 10","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"Gray image with noise RGB image with noise Gray image with salt and pepper noise\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"This 1D array is affected by a additive gaussian white noise (sigma=01 mu=0). (Image: )","category":"page"},{"location":"#Overview","page":"Noise.jl","title":"Overview","text":"","category":"section"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"Look here for more details and arguments of each function.","category":"page"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"Pages = [\"man/additive_white_gaussian.md\", \n         \"man/mult_gauss.md\",\n         \"man/salt_pepper.md\", \n         \"man/poisson.md\",\n         \"man/quantization.md\",\n         \"man/function_references.md\"\n        ]\nDepth = 2","category":"page"},{"location":"#Development","page":"Noise.jl","title":"Development","text":"","category":"section"},{"location":"","page":"Noise.jl","title":"Noise.jl","text":"The package is developed at GitHub.  There you can submit bug reports, propose new types of noise with pull requests, and make suggestions. We are very happy about new types of noise, which can be also very specific for some applications. The aim is to provide via Noise.jl a central package which can  be used by many different types of application from Biology to Astronomy and Electrical Engineering.","category":"page"},{"location":"man/quantization/#Quantization","page":"Quantization","title":"Quantization","text":"","category":"section"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"Quantizes the image into discrete intensities levels.","category":"page"},{"location":"man/quantization/#Usage","page":"Quantization","title":"Usage","text":"","category":"section"},{"location":"man/quantization/#Arrays,-Grayscale-Images-and-RGB-Images","page":"Quantization","title":"Arrays, Grayscale Images and RGB Images","text":"","category":"section"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"For arrays, grayscale images (Array{<:Gray}) and RGB images (Array{<:RGB}) we provide the following method:","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"quantization(X, levels; minv=0, maxv=1)","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"We round the intensities of the array values to levels different value levels. minv and maxv indicate the minimum and maximum value of the discretization interval. For Normed datatypes like Normed{UInt8, 8} you can't choose values above 1 and below 0.","category":"page"},{"location":"man/quantization/#Examples","page":"Quantization","title":"Examples","text":"","category":"section"},{"location":"man/quantization/#Images","page":"Quantization","title":"Images","text":"","category":"section"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"Some examples with images.","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"using Noise, TestImages, Images\nimg_gray = testimage(\"fabio_gray_256\")\nimg_color = testimage(\"fabio_color_256\")\n\nimg_gray_noise = quantization(img_gray, 20)\nimg_gray_noise_heavy= quantization(img_gray, 5)\nimg_color_noise = quantization(img_color, 10)\n\n\nsave(\"../images/q_img_gray_noise.png\", img_gray_noise) # hide\nsave(\"../images/q_img_gray_noise_heavy.png\", img_gray_noise_heavy) # hide\nsave(\"../images/q_img_color_noise.png\", img_color_noise) # hide\nnothing # hide","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"The images are in the same order as the commands are. The left image has 20 different value levels. The middle image only 5. The right image has 20 different value levels for each color channel.","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"Gray image with 20 levels Gray image with 5 levels RGB image with 20 color levels each\n(Image: ) (Image: ) (Image: )","category":"page"},{"location":"man/quantization/#D-Arrays","page":"Quantization","title":"1D Arrays","text":"","category":"section"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"Some examples with 1D arrays. ","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"using Noise, Plots\n\nx = LinRange(0.0, 10.0, 300)\ny = sin.(x)\ny_noise = quantization(y, 20, minv=-1, maxv=1)\ny_noise_2 = quantization(y, 5, minv=-1, maxv=1)\n\nplot(x,y);\nplot!(x, y_noise);\nplot!(x, y_noise_2);\nsavefig(\"../images/q_series.png\") # hide\nnothing # hide","category":"page"},{"location":"man/quantization/","page":"Quantization","title":"Quantization","text":"The green curve consists of 5 different levels, the orange one of 20. As it can be seen, already 20 different value sample the original signal quite good. (Image: )","category":"page"}]
}
