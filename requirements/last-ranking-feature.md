# **Story**

- Let's build an API route to rank users from Realm Defense (A Hero Tower Defense Mobile Game);
- In this API we should be able to obtain a dairy tournament results;
- The Tournament is able to play every day from 00:00 to 21:59 (UTC-0);

# **Domain Requirements**

- From 00:00 to 21:59 the player should be able to see the last result;
- From 22:00 to 23:59 this API will not return any data (amount of time to announce the new champions);

# **Who will use this API?**

Temos duas telas onde essa API pode ser usada:

We have two screens when this API could be utilized:

- Screen with a quick resume of the ranking, where will be only printed the players name, used Heroes names and final score;
- More detailed screen, showing player name and nationality, used Heroes name and their levels, final score and date/time when the player reach that score.