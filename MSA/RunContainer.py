import sys
import os
file_path = sys.argv[1]

condition = sys.argv[2]


if condition == 'Exited':
    os.system('docker start '+file_path)
elif condition == 'unhealthy':
    os.system('docker restart'+file_path)