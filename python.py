import pandas as pd
data=pd.read_csv('nba.csv',index_col='Name')
print(data)
data1=data.loc['R.J. Hunter']
data2=data.loc['Raul Neto']
data3=data.iloc[1:2]
print(data3)