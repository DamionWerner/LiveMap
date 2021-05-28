import folium

map = folium.Map(location=[47.665545,9.446883])
str= map.get_root().render()
print(str)