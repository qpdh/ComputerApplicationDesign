import subprocess
import os
import time

while True:
    # docker ps -a 명령어 결과 가져오기
    result = subprocess.check_output(['docker','ps','-a']).decode()

    #########################################################################
    # docker ps -a 명령어 parsing
    result = [i.strip() for i in result.split('\n') if i != '']

    docker_health = []
    for i in result[1:]:
        docker_health.append([k.strip() for k in i.split('   ') if k != ''])
    ##########################################################################

    # 돌면서 이상징후 캐치
    # 5번째 열
    # Exited
    # unhealthy
    for container in docker_health:
        if 'Exited' in container[4] :
            os.system('python RunContainer.py '+container[5]+ ' Exited')
        elif 'unhealthy' in container[4]:
            os.system('python RunContainer.py '+container[5]+ ' unhealthy')



    time.sleep(5)
