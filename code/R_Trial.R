library(gganimate)
library(ggplot2)
library(dplyr)
library(gapminder)
library(ggthemes)

options(scipen=999)  # turn-off scientific notation like 1e+48
theme_set(theme_bw())  # pre-set the bw theme.
faang <- read.csv("/Users/dcoder/Desktop/school/csc630/R_animated/FAANG_STOCKS.csv")
data("faang", package = "ggplot2")

gg <- ggplot(faang, aes(x=Date, y=High, color=company)) + 
  geom_line(size = 1, alpha = 0.5) +
  labs(subtitle="Fang Stocks over time in 2019", 
       x="Date", 
       y="High", 
       title="Correlation Graph of FAANG Stocks in 2019", 
       caption = "Source: www.kaggle.com/aayushmishra1512/faang-complete-stock-data") +
  scale_color_brewer(palette = "Paired") +

gg.animation = gg +
  transition_reveal(Date) + 
  view_follow(fixed_y = FALSE)

animate(gg.animation, height = 500, width = 800, fps = 24, duration = 10,
        end_pause = 20, res = 150)
anim_save("faang_v2.gif")
