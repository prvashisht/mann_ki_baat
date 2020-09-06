# mann_ki_baat

Analysis of Indian PM Modi's Mann ki Baat's text since the Coronavirus pandemic started.
PM Modi's main interaction with the nation is almost solely through an hour or so long monologue called Mann ki Baat, translated to Inner Thoughts, or Heart's Talk to be literal. 

Now the first case in India was reported on [30th January 2020](https://www.cnbc.com/2020/01/30/india-confirms-first-case-of-the-coronavirus.html),  and until the next Mann ki Baat episode on [23rd February 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-9th-episode-of-mann-ki-baat-2-0/), India had only 3 coronavirus cases so there was no real need to focus on this. However from that point onward, the number of cases started growing rapidly in India and by the next episode, India had almost 1000 cases warranting an action from the government.

### File Structure


|____raw/  `Contains text taken verbatim from pmindia.gov.in`

|____clean_1/ `Text with hindi words, headings from dialgues, etc removed manually`

|____clean_2/ `Text with special characters, numbers, repeat characters etc removed`

|____clean_3/ `Text with small words, along with some other, removed`

|____blocklist.txt `List of words not small but insignificant to get the topic`

|____safelist.txt `List of important words (contextual, nounds etc) to keep`

|____text_cleaner.js `JS file that does the actual cleaning from raw/ folder until clean_3/`

|____app.js `Sample server to create a webpage where the words can be animated in word cloud`

|____combine_divide_animate.js `takes text of all speeches and animates them over time`

|____divide_animate_single.js `Open the next file and start creating its word cloud`



### Data Sources

* Speeches
	1. [29 March 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-10th-episode-of-mann-ki-baat-2-0/)
	2. [26 April 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-11th-episode-of-mann-ki-baat-2-0/)
	3. [31 May 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-12th-episode-of-mann-ki-baat-2-0/)
	4. [28 June 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-13th-episode-of-mann-ki-baat-2-0/)
	5. [26 July 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-14th-episode-of-mann-ki-baat-2-0/)
	6. [30 August 2020](https://www.pmindia.gov.in/en/news_updates/pms-address-in-the-15th-episode-of-mann-ki-baat-2-0/)
* Text Cleaning idea taken from [Approsto's text cleaner](https://approsto.com/text-cleaner)
* Word cloud done with [Jason Davies' wordcloud](https://www.jasondavies.com/wordcloud)
* Coronavirus data from [owid/covid-19-data](https://github.com/owid/covid-19-data/tree/master/public/data)
* Coronavirus data plotted and animated on [Flourish Studio](https://app.flourish.studio/visualisation/3633810/)
* [Reddit post](https://www.reddit.com/r/dataisbeautiful/comments/fm38c1/oc_covid19_infections_vs_rcoronavirus/fl20jzw/) that motivated/guided me to the tools used.



### Disclaimer

I've tried to be as unbiased as possible, but because I'm cleaning the data, choosing the words to add or remove manually, there's likely a bias in there. Please feel free to open a pull request to improve this tool in any way. 
